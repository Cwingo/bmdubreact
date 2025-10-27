import "./ExplorePage.css";

export default function ExplorePage() {
  return (
    <section className="page-wrap">
      <h1>Explore Builds</h1>
      <p className="meta">
        Browse community builds. Open any card to view specs, parts, dyno numbers, and runs.
      </p>

      <div className="filter-section">
        <div className="filter-chips">
          <span className="chip active">All</span>
          <span className="chip">B58</span>
          <span className="chip">S55</span>
          <span className="chip">S63</span>
          <span className="chip">E85</span>
          <span className="chip">93</span>
          <span className="chip">Daily</span>
          <span className="chip">Track</span>
        </div>

        <div className="sort-select">
          <label htmlFor="sort">Sort</label>
          <select id="sort">
            <option>Newest</option>
            <option>Highest WHP</option>
            <option>Fastest 60–130</option>
          </select>
        </div>
      </div>

      <div className="build-grid">
        <article className="card">
          <div className="img" style={{ backgroundImage: "url(/images/540.png)" }}></div>
          <div className="body">
            <div className="card-header">
              <h3>G30 540i • E50 • Stage 2+</h3>
              <strong>585 whp</strong>
            </div>
            <div className="meta">B58 • xDrive • Pure800 • XHP</div>
            <div className="chips">
              <span className="chip">E50</span>
              <span className="chip">Daily</span>
            </div>
            <a className="btn" href="#">View Build</a>
          </div>
        </article>

        <article className="card">
          <div className="img" style={{ backgroundImage: "url(/images/m5.png)" }}></div>
          <div className="body">
            <div className="card-header">
              <h3>F90 M5 • E30 • Custom</h3>
              <strong>710 whp</strong>
            </div>
            <div className="meta">S63 • AWD • Intakes • Downpipes</div>
            <div className="chips">
              <span className="chip">Drag</span>
              <span className="chip">E30</span>
            </div>
            <a className="btn" href="#">View Build</a>
          </div>
        </article>

        <article className="card">
          <div className="img" style={{ backgroundImage: "url(/images/m53.png)" }}></div>
          <div className="body">
            <div className="card-header">
              <h3>G80 M3 • E50 • OTS</h3>
              <strong>580 whp</strong>
            </div>
            <div className="meta">S58 • xDrive • OTS Map</div>
            <div className="chips">
              <span className="chip">Street</span>
              <span className="chip">E50</span>
            </div>
            <a className="btn" href="#">View Build</a>
          </div>
        </article>

        <article className="card">
          <div className="img" style={{ backgroundImage: "url(/images/340.png)" }}></div>
          <div className="body">
            <div className="card-header">
              <h3>G20 330i • 93 • Street</h3>
              <strong>300 whp</strong>
            </div>
            <div className="meta">B48 • RWD • Tune • DP</div>
            <div className="chips">
              <span className="chip">93</span>
              <span className="chip">Budget</span>
            </div>
            <a className="btn" href="#">View Build</a>
          </div>
        </article>
      </div>

      

      <div className="pagination">
        <a className="btn" href="#">Previous</a>
        <a className="btn primary" href="#">1</a>
        <a className="btn" href="#">2</a>
        <a className="btn" href="#">Next</a>
      </div>
    </section>
  );
}
