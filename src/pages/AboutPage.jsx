import "./AboutPage.css";
import meabout from "../images/meabout.png";

function AboutPage() {
  return (
    <main className="page-shell about-shell">
      <section className="section-header">
        <h1 className="section-title">
          <span className="section-bar" /> About
        </h1>
        <p className="section-desc">
          The bmDub network was created to showcase real BMW builds with verified
          numbers, quality mods, and real owners.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Meet the Creator</h2>
          <p>
            My name is Chris Wingo, a Computer Information Systems major at the
            University of South Carolina. I built bmDub network to combine my
            passion for cars and coding — helping enthusiasts share authentic
            builds and shop recommendations.
          </p>
          <p>
            I own a 2020 BMW 540i with a Stage 1 tune and various performance
            upgrades, and I enjoy showcasing the community’s creativity through
            this platform.
          </p>
        </div>

        <div className="about-image">
          <img src={meabout} alt="Chris Wingo's BMW" />
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
