import { useMemo, useState } from "react";
import "../styles/ExplorePage.css";

import BuildModal from "../components/BuildModal.jsx";

// Existing
import img540 from "../images/540.png";
import imgM5 from "../images/m5.png";

// New files
import g80 from "../images/g80.png";
import g801 from "../images/g801.png";
import g82 from "../images/g82.png";
import x5m from "../images/x5m.png";

function ExplorePage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [tag, setTag] = useState("All");
  const [sortKey, setSortKey] = useState("Newest");

  const builds = [
    {
      id: "g30-540i",
      title: "G30 540i • E50 • Stage 2+",
      user: "@stealthyg30",
      specs: ["B58", "xDrive", "Pure800", "XHP", "E50"],
      images: [{ src: img540 }],
      whp: 585,
      sixty130: 8.9,
      createdAt: 1730515200000,
      meta: "B58 • xDrive • Pure800 • XHP",
      chips: ["E50", "Daily"],
      tags: ["B58", "E50", "Daily"],
      bg: img540,
    },
    {
      id: "f90-m5",
      title: "F90 M5 • E30 • Custom",
      user: "f90_king on instaram",
      specs: ["S63", "AWD", "Intakes", "Downpipes", "E30"],
      images: [{ src: imgM5 }],
      whp: 710,
      sixty130: 7.2,
      createdAt: 1730957200000,
      meta: "S63 • AWD • Intakes • Downpipes",
      chips: ["Drag", "E30"],
      tags: ["S63", "E30", "Track"],
      bg: imgM5,
    },
    {
      id: "g80-m3",
      title: "G80 M3 • E50 • Custom",
      user: "@g80lennin",
      specs: ["S58", "xDrive", "Intakes", "E50"],
      images: [{ src: g80 }],
      whp: 590,
      sixty130: 7.8,
      createdAt: 1730179200000,
      meta: "S58 • xDrive • Intakes • OTS Map",
      chips: ["E50", "Street"],
      tags: ["S58", "E50", "Daily"],
      bg: g80,
    },

    {
      id: "g82-m4",
      title: "G82 M4 • E50 • Street",
      user: "@g82.sejfo",
      specs: ["S58", "RWD", "Downpipes", "E50"],
      images: [{ src: g82 }],
      whp: 610,
      sixty130: 7.4,
      createdAt: 1731280000000,
      meta: "S58 • RWD • Downpipes • E50",
      chips: ["E50", "Street"],
      tags: ["S58", "E50", "Daily"],
      bg: g82,
    },

    {
      id: "f95-x5m",
      title: "F95 X5M • 93 • Stage 1",
      user: "@mr__x5m",
      specs: ["S63", "AWD", "Stage 1 Tune", "93"],
      images: [{ src: x5m }],
      whp: 630,
      sixty130: 8.2,
      createdAt: 1731366400000,
      meta: "S63 • AWD • 93 • Stage 1",
      chips: ["93", "Daily"],
      tags: ["S63", "93", "Daily"],
      bg: x5m,
    },

    // NEW 6: G80 M3 (green)
    {
      id: "g80-m3-green",
      title: "G80 M3 • E30 • Track",
      user: "@g80green",
      specs: ["S58", "xDrive", "E30", "Tune"],
      images: [{ src: g801 }],
      whp: 600,
      sixty130: 7.6,
      createdAt: 1731452800000,
      meta: "S58 • xDrive • Track Setup",
      chips: ["E30", "Track"],
      tags: ["S58", "E30", "Track"],
      bg: g801,
    },
  ];

  const visible = useMemo(() => {
    let list = builds;
    if (tag !== "All") list = list.filter((b) => b.tags.includes(tag));

    if (sortKey === "Highest WHP") {
      list = [...list].sort((a, b) => b.whp - a.whp);
    } else if (sortKey === "Fastest 60–130") {
      list = [...list].sort((a, b) => a.sixty130 - b.sixty130);
    } else {
      list = [...list].sort((a, b) => b.createdAt - a.createdAt);
    }
    return list;
  }, [builds, tag, sortKey]);

  const chipOptions = ["All", "B58", "S58", "S63", "93", "E50", "E30", "Track", "Daily"];

  return (
    <main className="page-shell explore-shell">
      <section className="section-header">
        <h1 className="section-title">
          <span className="section-bar" /> Explore Builds
        </h1>
        <p className="section-desc">
          Browse community builds. Open any card to view specs, parts, dyno numbers,
          and runs.
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
            <label htmlFor="sort" className="sort-label">Sort</label>
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

      <section className="build-grid">
        {visible.map((b) => (
          <article className="build-card" key={b.id}>
            <div
              className="build-card-img"
              style={{ backgroundImage: `url(${b.bg})` }}
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
                <strong className="build-card-whp">{b.whp} whp</strong>
              </div>
              <div className="build-card-meta">{b.meta}</div>
              <div className="chip-row-tight">
                {b.chips.map((c) => (
                  <span key={c} className="chip dark">{c}</span>
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
        ))}
      </section>

      <BuildModal open={open} build={selected} onClose={() => setOpen(false)} />
    </main>
  );
}

export default ExplorePage;
