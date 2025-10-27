import "./HomePage.css";

import heroVideo from "../images/hero.mp4";
import img540 from "../images/540.png";
import imgM5 from "../images/m5.png";
import imgM53 from "../images/m53.png";

function HomePage() {
  return (
    <main className="home-shell">
      <section className="hero">
        <div className="hero-bg">
          <video
            className="hero-video"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="hero-inner">
          <h1 className="hero-title">
            Real BMW builds with real numbers.
          </h1>

          <p className="hero-desc">
            Community builds with parts lists, dyno sheets, 60–130s, and shop
            tags. Submit your own and get featured.
          </p>

          <div className="hero-buttons">
            <a className="btn-primary" href="/bmdubreact/explore">
              Explore Builds
            </a>
            <a className="btn-danger" href="/bmdubreact/submit">
              Submit Build
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">---</div>
              <div className="stat-label">Total Builds</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">---</div>
              <div className="stat-label">Published This Week</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">--- whp</div>
              <div className="stat-label">Avg Top-10 Dyno</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BUILDS */}
      <section className="featured-wrap">
        <div className="featured-inner">
          <h2 className="featured-title">Featured Builds</h2>

          <div className="featured-grid">
            {/* featured card 1 */}
            <article className="featured-card">
              <div
                className="featured-img"
                style={{
                  backgroundImage: `url(${img540})`,
                }}
              />
              <div className="featured-body">
                <div className="featured-top">
                  <div>G30 540i • E50 • Stage 2+</div>
                  <strong>585 whp</strong>
                </div>
                <div className="featured-meta">
                  B58 • xDrive • Pure800 • XHP • Catless DP
                </div>
                <div className="chip-row-tight">
                  <span className="chip dark">E50</span>
                  <span className="chip dark">Street</span>
                  <span className="chip dark">Daily</span>
                </div>
              </div>
            </article>

            {/* featured card 2 */}
            <article className="featured-card">
              <div
                className="featured-img"
                style={{
                  backgroundImage: `url(${imgM5})`,
                }}
              />
              <div className="featured-body">
                <div className="featured-top">
                  <div>F90 M5 • E30 • Custom</div>
                  <strong>710 whp</strong>
                </div>
                <div className="featured-meta">
                  S63 • AWD • Intakes • Downpipes
                </div>
                <div className="chip-row-tight">
                  <span className="chip dark">Drag</span>
                  <span className="chip dark">E30</span>
                </div>
              </div>
            </article>

            {/* featured card 3 */}
            <article className="featured-card">
              <div
                className="featured-img"
                style={{
                  backgroundImage: `url(${imgM53})`,
                }}
              />
              <div className="featured-body">
                <div className="featured-top">
                  <div>F30 340i • 93 • OTS</div>
                  <strong>440 whp</strong>
                </div>
                <div className="featured-meta">
                  B58 • RWD • IC • DP
                </div>
                <div className="chip-row-tight">
                  <span className="chip dark">Budget</span>
                  <span className="chip dark">93</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
