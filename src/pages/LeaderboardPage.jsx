import { useState } from "react";
import "../styles/LeaderboardPage.css";

function LeaderboardPage() {
  const [tab, setTab] = useState("dyno");

  const dynoRows = [
    { rank: 1, model: "F90 M5",  hp: 710, user: "@user123" },
    { rank: 2, model: "G30 540i", hp: 585, user: "@user456" },
    { rank: 3, model: "F30 340i", hp: 440, user: "@user789" },
  ];

  const raceRows = [
    { rank: 1, model: "G80 M3C", stat: "10.6 @ 130", user: "@trackstar" },
    { rank: 2, model: "F87 M2C", stat: "10.9 @ 126", user: "@boosted" },
    { rank: 3, model: "F82 M4",  stat: "11.1 @ 124", user: "@b58boy" },
  ];

  return (
    <main className="leaderboard-page page">
      <section className="lb-hero">
        <div className="lb-hero-inner container">
          <div className="lb-hero-heading">
            <div className="lb-hero-lines">
              <span className="lb-line blue" />
              <span className="lb-line red" />
            </div>
            <h1 className="lb-title">Leaderboard</h1>
            <p className="lb-sub">Dyno Times • Races • Community Rankings</p>
          </div>
        </div>
      </section>

      <section className="lb-content-wrap container">
        <div className="lb-tabs" role="tablist" aria-label="Leaderboard tabs">
          <button
            className={`lb-tab ${tab === "dyno" ? "active" : ""}`}
            role="tab"
            aria-selected={tab === "dyno"}
            onClick={() => setTab("dyno")}
          >
            Dyno Times
          </button>
          <button
            className={`lb-tab ${tab === "races" ? "active" : ""}`}
            role="tab"
            aria-selected={tab === "races"}
            onClick={() => setTab("races")}
          >
            Races
          </button>
        </div>

        {/* tables */}
        {tab === "dyno" ? (
          <div className="lb-table-wrap card">
            <table className="lb-table">
              <thead>
                <tr>
                  <th className="rank-col">Rank</th>
                  <th>Model</th>
                  <th>Horsepower</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                {dynoRows.map((r) => (
                  <tr key={r.rank}>
                    <td className="rank-col">{r.rank}</td>
                    <td className="model-col">{r.model}</td>
                    <td>{r.hp}</td>
                    <td>{r.user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="lb-table-wrap card">
            <table className="lb-table">
              <thead>
                <tr>
                  <th className="rank-col">Rank</th>
                  <th>Model</th>
                  <th>1/4 Mile</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                {raceRows.map((r) => (
                  <tr key={r.rank}>
                    <td className="rank-col">{r.rank}</td>
                    <td className="model-col">{r.model}</td>
                    <td>{r.stat}</td>
                    <td>{r.user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="lb-video card">
          <div className="lb-video-head">
            <span className="lb-badge">Dyno Pull</span>
            <div className="lb-video-meta">
              <strong>2021 BMW M5 • Stage 2</strong>
              <span>AWD • Meth • Downpipes • Tune</span>
            </div>
          </div>

          <div className="lb-video-frame">
            <iframe
              title="BMW Build Showcase"
              src="https://www.youtube.com/embed/BVajDIDtVJc?si=ZIQTv7YHG6r7aclf"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className="lb-video-notes">Peak 710 whp, 0–60 in 3.1s.</p>
        </div>
      </section>
    </main>
  );
}

export default LeaderboardPage;
