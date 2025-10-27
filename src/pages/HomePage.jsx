import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg">
          <video
            className="hero-video"
            src="/images/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-inner">
          <h1 className="hero-headline">
            Real BMW builds with real numbers.
          </h1>

          <p className="hero-text">
            Community builds with parts lists, dyno sheets, 60–130s, and shop tags.
            Submit your own and get featured.
          </p>

          <div className="hero-actions">
            <Link className="cta-btn cta-blue" to="/explore">
              Explore Builds
            </Link>
            <Link className="cta-btn cta-red" to="/submit">
              Submit Build
            </Link>
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

      {/* FEATURED BUILDS PREVIEW */}
      <section className="featured-wrap">
        <h2 className="featured-title">Featured Builds</h2>

        <div className="featured-grid">
          {/* CARD 1 */}
          <article className="featured-card">
            <div
              className="featured-img"
              style={{ backgroundImage: "url(/images/540.png)" }}
            />
            <div className="featured-body">
              <div className="featured-top">
                <h3>G30 540i • E50 • Stage 2+</h3>
                <strong>585 whp</strong>
              </div>
              <div className="featured-meta">
                B58 • xDrive • Pure800 • XHP • Catless DP
              </div>
              <div className="chips">
                <span className="chip dark">E50</span>
                <span className="chip dark">Street</span>
                <span className="chip dark">Daily</span>
              </div>
            </div>
          </article>

          {/* CARD 2 */}
          <article className="featured-card">
            <div
              className="featured-img"
              style={{ backgroundImage: "url(/images/m5.png)" }}
            />
            <div className="featured-body">
              <div className="featured-top">
                <h3>F90 M5 • E30 • Custom</h3>
                <strong>710 whp</strong>
              </div>
              <div className="featured-meta">
                S63 • AWD • Intakes • Downpipes
              </div>
              <div className="chips">
                <span className="chip dark">Drag</span>
                <span className="chip dark">E30</span>
              </div>
            </div>
          </article>

          {/* CARD 3 */}
          <article className="featured-card">
            <div
              className="featured-img"
              style={{ backgroundImage: "url(/images/m53.png)" }}
            />
            <div className="featured-body">
              <div className="featured-top">
                <h3>F30 340i • 93 • OTS</h3>
                <strong>440 whp</strong>
              </div>
              <div className="featured-meta">
                B58 | RWD | IC | CP
              </div>
              <div className="chips">
                <span className="chip dark">Budget</span>
                <span className="chip dark">93</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
