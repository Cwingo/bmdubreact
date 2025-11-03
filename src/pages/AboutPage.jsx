import "../styles/AboutPage.css";
import meabout from "../images/meabout.png";
import ContactForm from "../components/ContactForm.jsx";

function AboutPage() {
  return (
    <main className="page-shell about-shell">
      {/* header */}
      <section className="section-header">
        <h1 className="section-title">
          <span className="section-bar" /> About
        </h1>
        <p className="section-desc">
          The bmDub network was created to showcase real BMW builds with verified
          numbers, quality mods, and real owners.
        </p>
      </section>

      {/* content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Meet the Creator</h2>
          <p>
            bmDub network is a student project prototype showing how a community
            could share BMW builds, link parts, tag shops, and post real results.
          </p>
        </div>

        <div className="about-image">
          <img src={meabout} alt="Chris Wingo's BMW" />
        </div>
      </section>

      {/* contact form */}
      <section className="about-form">
        <ContactForm />
      </section>
    </main>
  );
}

export default AboutPage;
