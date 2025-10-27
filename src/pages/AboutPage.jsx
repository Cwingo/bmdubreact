import "./AboutPage.css";

export default function AboutPage() {
  return (
    <section className="page-wrap about-layout">
      <div className="about-text">
        <h1>About bmDub network</h1>
        <p>
          bmDub network is built by BMW people for BMW people. The goal is to
          show clean daily builds, not just trailer queens. Real street cars,
          real mods, real money spent.
        </p>
        <p>
          I’m building this to highlight B58 cars like my 540i, and to make it
          easier to find parts, shops, and ideas without getting flamed in
          comments.
        </p>
      </div>

      <div className="about-media">
        <img
          src="/images/meabout.png"
          alt="Owner / builder"
          className="about-img"
        />
      </div>
    </section>
  );
}
