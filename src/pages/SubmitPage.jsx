// sections
import SubmitBuildForm from "../components/SubmitBuildForm.jsx";
import "../styles/SubmitBuildForm.css";
import m340 from "../images/m340.png";

export default function SubmitPage() {
  return (
    <main className="submit-shell">
      {/* header */}
      <section className="section-header">
        <h1 className="section-title">
          <span className="section-bar" /> Submit Your Build
        </h1>
        <p className="section-desc">Send in your car to get featured.</p>
      </section>

      {/* layout */}
      <section className="submit-grid">
        <SubmitBuildForm />

        <aside className="submit-aside">
          <div className="aside-frame">
            <img src={m340} alt="BMW M340 build" />
          </div>
        </aside>
      </section>
    </main>
  );
}
