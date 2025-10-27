import "./LeaderboardPage.css";

export default function LeaderboardPage() {
  return (
    <section className="leaderboard-page">
      {/* HERO / HEADER STRIP */}
      <div className="lb-hero">
        <div className="lb-hero-inner">
          <div className="lb-bars">
            <div className="lb-bar red"></div>
            <div className="lb-bar blue"></div>
          </div>

          <h1 className="lb-title">Leaderboard</h1>
          <p className="lb-subtitle">
            Dyno Times • Races • Community Rankings
          </p>
        </div>

        <div className="lb-blob lb-blob-one"></div>
        <div className="lb-blob lb-blob-two"></div>
      </div>

      {/* CONTENT WRAP */}
      <div className="lb-content">
        {/* TABS */}
        <div className="lb-tabs">
          <button className="lb-tab active">Dyno Times</button>
          <button className="lb-tab">Races</button>
        </div>

        {/* TABLE */}
        <div className="lb-table-wrap">
          <table className="lb-table">
            <thead>
              <tr>
                <th className="col-rank">Rank</th>
                <th className="col-model">Model</th>
                <th className="col-hp">Horsepower</th>
                <th className="col-user">User</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-rank">1</td>
                <td className="col-model">F90 M5</td>
                <td className="col-hp">710</td>
                <td className="col-user">@user123</td>
              </tr>
              <tr>
                <td className="col-rank">2</td>
                <td className="col-model">G30 540i</td>
                <td className="col-hp">585</td>
                <td className="col-user">@user456</td>
              </tr>
              <tr>
                <td className="col-rank">3</td>
                <td className="col-model">F30 340i</td>
                <td className="col-hp">440</td>
                <td className="col-user">@user789</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FEATURED CAR CALLOUT */}
        <div className="lb-feature-card">
          <div
            className="lb-feature-img"
            style={{ backgroundImage: "url(/images/m5.png)" }}
          />
          <div className="lb-feature-body">
            <div className="lb-feature-rank-row">
              <span className="lb-feature-rank">#1</span>
              <span className="lb-feature-name">F90 M5 • 710 whp</span>
            </div>
            <div className="lb-feature-details">
              Built for 60–130 pulls. AWD. Intakes. Downpipes. Big sauce.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
