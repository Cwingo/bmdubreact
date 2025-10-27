import "./PartsPage.css";
import downpipe from "../images/downpipe.png";
import intercooler from "../images/intercooler.png";
import coilover from "../images/coilover.png";
import chargepipe from "../images/chargepipe.png";
import intake from "../images/intake.png";
import shiftknob from "../images/shiftknob.png";

function PartsPage() {
  return (
    <main className="page-shell parts-shell">
      <section className="section-header">
        <h1 className="section-title">
          <span className="section-bar" /> Parts Library
        </h1>
        <p className="section-desc">
          Browse performance and styling parts from the bmDub community.
        </p>
      </section>

      <section className="parts-grid">
        <article className="part-card">
          <img src={downpipe} alt="Downpipe" />
          <h3>Catless Downpipe</h3>
          <p>Improves exhaust flow and turbo response.</p>
        </article>

        <article className="part-card">
          <img src={intercooler} alt="Intercooler" />
          <h3>Upgraded Intercooler</h3>
          <p>Keeps intake temps lower under boost.</p>
        </article>

        <article className="part-card">
          <img src={coilover} alt="Coilover Suspension" />
          <h3>Coilover Suspension</h3>
          <p>Adjustable height and damping for performance driving.</p>
        </article>

        <article className="part-card">
          <img src={chargepipe} alt="Chargepipe" />
          <h3>Aluminum Chargepipe</h3>
          <p>Replaces weak stock plastic pipe with aluminum.</p>
        </article>

        <article className="part-card">
          <img src={intake} alt="Cold Air Intake" />
          <h3>Cold Air Intake</h3>
          <p>Increases airflow and enhances turbo sound.</p>
        </article>

        <article className="part-card">
          <img src={shiftknob} alt="Shift Knob" />
          <h3>Carbon Shift Knob</h3>
          <p>Interior upgrade with carbon fiber finish.</p>
        </article>
      </section>
    </main>
  );
}

export default PartsPage;
