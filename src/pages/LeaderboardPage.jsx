import "./LeaderboardPage.css";
import img540 from "../images/540.png";
import imgM5 from "../images/m5.png";
import imgM53 from "../images/m53.png";

function LeaderboardPage() {
  return (
    <main className="page-shell leaderboard-shell">
      <section className="section-header">
        <h1 className="section-title">
          <span className="section-bar" /> Leaderboard
        </h1>
        <p className="section-desc">
          Top rated bmDub builds. Cleanest styling. Fastest pulls.
        </p>
      </section>

      <section className="leader-top">
        <div className="leader-topcard">
          <div className="leader-rank">#1</div>
          <div
            className="leader-img"
            style={{ backgroundImage: `url(${img540})` }}
          ></div>
          <div className="leader-info">
            <h3>2020 BMW 540i — @chris540</h3>
            <p>Stage 1 Tune • Downpipe • Burble • Lowered on Coils</p>
          </div>
        </div>
      </section>

      <section className="leader-grid">
        <article className="leader-card">
          <div
            className="leader-thumb"
            style={{ backgroundImage: `url(${img540})` }}
          />
          <div className="leader-body">
            <h4>2020 BMW 540i</h4>
            <p>430whp • 0–60: 3.9s • Owner: @chris540</p>
            <p>Downpipe • Intake • Chargepipe • Custom burble</p>
          </div>
        </article>

        <article className="leader-card">
          <div
            className="leader-thumb"
            style={{ backgroundImage: `url(${imgM5})` }}
          />
          <div className="leader-body">
            <h4>2021 BMW M5</h4>
            <p>710whp • 0–60: 3.1s • Owner: @m5power</p>
            <p>Downpipes • Intakes • Tune • Meth kit</p>
          </div>
        </article>

        <article className="leader-card">
          <div
            className="leader-thumb"
            style={{ backgroundImage: `url(${imgM53})` }}
          />
          <div className="leader-body">
            <h4>2019 BMW 340i</h4>
            <p>585whp • 0–60: 4.0s • Owner: @tuned340</p>
            <p>Pure800 • xHP • Catless DP • Stage 2+</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default LeaderboardPage;
