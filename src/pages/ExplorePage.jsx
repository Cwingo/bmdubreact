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
        setBuilds(list);
      } catch {
        setError("Could not load builds");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const curatedBuilds = useMemo(
    () => builds.filter((b) => !String(b.id).startsWith("user-")),
    [builds]
  );

  const recentSubmissions = useMemo(
    () =>
      builds
        .filter((b) => String(b.id).startsWith("user-"))
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)),
    [builds]
  );

  const visible = useMemo(() => {
    let list = curatedBuilds;

    if (tag !== "All") {
      list = list.filter((b) => Array.isArray(b.tags) && b.tags.includes(tag));
    }

    if (sortKey === "Highest WHP") {
      list = [...list].sort((a, b) => (b.whp || 0) - (a.whp || 0));
    } else if (sortKey === "Fastest 60–130") {
      list = [...list].sort((a, b) => {
        const av = typeof a.sixty130 === "number" ? a.sixty130 : Infinity;
        const bv = typeof b.sixty130 === "number" ? b.sixty130 : Infinity;
        return av - bv;
      });
    } else {
      list = [...list].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    }

    return list;
  }, [curatedBuilds, tag, sortKey]);

  const chipOptions = [
    "All",
    "B58",
    "S58",
    "S63",
    "93",
    "E50",
    "E30",
    "Track",
    "Daily",
  ];

  return (
    <main className="page-shell explore-shell">
      <section className="section-header">
        <h1 className="section-title">
          <span className="section-bar" /> Explore Builds
        </h1>
        <p className="section-desc">
          Browse community builds. Open any card to view specs, parts, dyno
          numbers, and runs.
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
                {c.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="sort-wrap">
            <span className="sort-label">Sort</span>
            <select
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

      {loading && <p className="status-text">Loading…</p>}
      {error && <p className="error">{error}</p>}

      <section className="build-grid">
        {visible.map((b) => {
          const imgUrl = b.bg || "";

          const whpLabel =
            typeof b.whp === "number" && b.whp > 0 ? `${b.whp} whp` : "— whp";

          return (
            <article className="build-card" key={b.id}>
              <div
                className="build-card-img"
                style={{
                  backgroundImage: imgUrl ? `url(${imgUrl})` : "none",
                }}
                role="button"
                aria-label={`Open ${b.title}`}
                onClick={() => {
                  setSelected(b);
                  setOpen(true);
                }}
              />
              <div className="build-card-body">
                <div className="build-card-toprow">
                  <h3 className="build-card-title">{b.title}</h3>
                  <strong className="build-card-whp">{whpLabel}</strong>
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
                <button
                  className="btn-view"
                  onClick={() => {
                    setSelected(b);
                    setOpen(true);
                  }}
                >
                  View Build
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {recentSubmissions.length > 0 && (
        <section className="recent-submissions">
          <h2 className="section-subtitle">Recent Submissions</h2>
          <p className="section-desc">
            These are fresh builds submitted by the community.
          </p>

          <div className="build-grid">
            {recentSubmissions.map((b) => {
              const imgUrl = b.bg || "";

              return (
                <article className="build-card" key={b.id}>
                  <div
                    className="build-card-img"
                    style={{
                      backgroundImage: imgUrl ? `url(${imgUrl})` : "none",
                    }}
                  />
                  <div className="build-card-body">
                    <div className="build-card-toprow">
                      <h3 className="build-card-title">{b.title || b.car}</h3>
                    </div>
                    <div className="build-card-meta">
                      {b.user || b.instagram}
                    </div>
                    <p className="build-card-meta">{b.meta}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <BuildModal open={open} build={selected} onClose={() => setOpen(false)} />
    </main>
  );
}

export default ExplorePage;
