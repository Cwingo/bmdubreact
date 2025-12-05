import { useMemo, useState, useEffect } from "react";
import "../styles/ExplorePage.css";
import BuildModal from "../components/BuildModal.jsx";
import { fetchBuilds } from "../lib/api";

function ExplorePage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [tag, setTag] = useState("All");
  const [sortKey, setSortKey] = useState("Newest");

  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const list = await fetchBuilds();
        setBuilds(list || []);
      } catch {
        setError("Could not load builds");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const visible = useMemo(() => {
    let list = [...builds];

    if (tag !== "All") {
      list = list.filter((b) => Array.isArray(b.tags) && b.tags.includes(tag));
    }

    if (sortKey === "Highest WHP") {
      list.sort((a, b) => (Number(b.whp) || 0) - (Number(a.whp) || 0));
    } else if (sortKey === "Fastest 60–130") {
      const getVal = (x) =>
        typeof x.sixty130 === "number"
          ? x.sixty130
          : Number(x.sixty130) || Number.POSITIVE_INFINITY;
      list.sort((a, b) => getVal(a) - getVal(b));
    } else {
      list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    }

    return list;
  }, [builds, tag, sortKey]);

  const chipOptions = ["All", "B58", "S58", "S63", "93", "E50", "E30", "Track", "Daily"];

  const handleOpen = (b) => {
    setSelected(b);
    setOpen(true);
  };

  return (
    <main className="page-shell explore-shell">
      <section className="section-header">
        <h1 className="section-title">
          <span className="section-bar" /> Explore Builds
        </h1>
        <p className="section-desc">
          Browse community builds. Open any card to view specs, parts, dyno numbers, and runs.
        </p>

        <div className="explore-filters-row">
          <div className="chips-row">
            {chipOptions.map((c) => (
              <button
                key={c}
                type="button"
                className={`chip ${tag === c ? "active" : ""}`}
                onClick={() => setTag(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="sort-wrap">
            <label htmlFor="sort" className="sort-label">
              Sort
            </label>
            <select
              id="sort"
              className="sort-select"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              <option>Newest</option>
              <option>Highest WHP</option>
              <option>Fastest 60–130</option>
            </select>
          </div>
        </div>
      </section>

      {loading && <p>Loading…</p>}
      {error && <p className="error">{error}</p>}

      <section className="build-grid">
        {visible.map((b) => {
          const img =
            b.image ||
            (Array.isArray(b.images) && b.images.length > 0 ? b.images[0].src : "");

          return (
            <article className="build-card" key={b.id}>
              {img && (
                <img
                  className="build-card-img"
                  src={img}
                  alt={b.title}
                  onClick={() => handleOpen(b)}
                />
              )}
              <div className="build-card-body">
                <div className="build-card-toprow">
                  <h3 className="build-card-title">{b.title}</h3>
                  <strong className="build-card-whp">
                    {Number(b.whp) > 0 ? `${b.whp} whp` : "— whp"}
                  </strong>
                </div>
                <div className="build-card-meta">{b.meta}</div>
                <div className="chip-row-tight">
                  {Array.isArray(b.chips) &&
                    b.chips.map((c) => (
                      <span key={c} className="chip dark">
                        {c}
                      </span>
                    ))}
                </div>
                <button className="btn-view" onClick={() => handleOpen(b)}>
                  View Build
                </button>
              </div>
            </article>
          );
        })}
      </section>

      <BuildModal open={open} build={selected} onClose={() => setOpen(false)} />
    </main>
  );
}

export default ExplorePage;
