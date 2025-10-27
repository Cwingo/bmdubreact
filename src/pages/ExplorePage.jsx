import "./ExplorePage.css";

import img540 from "../images/540.png";   
import imgM5 from "../images/m5.png";     
import imgM53 from "../images/m53.png";   
function ExplorePage() {
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
            <span className="chip active">All</span>
            <span className="chip">B58</span>
            <span className="chip">S55</span>
            <span className="chip">S63</span>
            <span className="chip">E85</span>
            <span className="chip">93</span>
            <span className="chip">Daily</span>
            <span className="chip">Track</span>
          </div>

          <div className="sort-wrap">
            <label htmlFor="sort" className="sort-label">
              Sort
            </label>
            <select id="sort" className="sort-select">
              <option>Newest</option>
              <option>Highest WHP</option>
              <option>Fastest 60–130</option>
            </select>
          </div>
        </div>
      </section>

      <section className="build-grid">
        {/* CARD 1 */}
        <article className="build-card">
          <div
            className="build-card-img"
            style={{
              backgroundImage: `url(${img540})`,
            }}
          />
          <div className="build-card-body">
            <div className="build-card-toprow">
              <h3 className="build-card-title">
                G30 540i • E50 • Stage 2+
              </h3>
              <strong className="build-card-whp">585 whp</strong>
            </div>

            <div className="build-card-meta">
              B58 • xDrive • Pure800 • XHP
            </div>

            <div className="chip-row-tight">
              <span className="chip dark">E50</span>
              <span className="chip dark">Daily</span>
            </div>

            <button className="btn-view">View Build</button>
          </div>
        </article>

        {/* CARD 2 */}
        <article className="build-card">
          <div
            className="build-card-img"
            style={{
              backgroundImage: `url(${imgM5})`,
            }}
          />
          <div className="build-card-body">
            <div className="build-card-toprow">
              <h3 className="build-card-title">
                F90 M5 • E30 • Custom
              </h3>
              <strong className="build-card-whp">710 whp</strong>
            </div>

            <div className="build-card-meta">
              S63 • AWD • Intakes • Downpipes
            </div>

            <div className="chip-row-tight">
              <span className="chip dark">Drag</span>
              <span className="chip dark">E30</span>
            </div>

            <button className="btn-view">View Build</button>
          </div>
        </article>

        {/* CARD 3 */}
        <article className="build-card">
          <div
            className="build-card-img"
            style={{
              backgroundImage: `url(${imgM53})`,
            }}
          />
          <div className="build-card-body">
            <div className="build-card-toprow">
              <h3 className="build-card-title">
                G80 M3 • E50 • OTS
              </h3>
              <strong className="build-card-whp">580 whp</strong>
            </div>

            <div className="build-card-meta">
              S58 • xDrive • OTS Map
            </div>

            <div className="chip-row-tight">
              <span className="chip dark">Street</span>
              <span className="chip dark">E50</span>
            </div>

            <button className="btn-view">View Build</button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ExplorePage;
