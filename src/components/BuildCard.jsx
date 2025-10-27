// src/components/BuildCard.jsx
import "./BuildCard.css";

export default function BuildCard() {
  return (
    <article className="build-card">
      <img
        className="build-card__img"
        src="public/images/540.png"
        alt="2020 BMW 540i Stage 1"
      />

      <div className="build-card__body">
        <h2 className="build-card__title">
          2020 BMW 540i <span className="build-card__badge">Stage 1 Tune</span>
        </h2>

        <ul className="build-card__stats">
          <li><span className="label">Power:</span> 430whp</li>
          <li><span className="label">0-60:</span> 3.9s</li>
          <li><span className="label">Owner:</span> @chris540</li>
        </ul>

        <p className="build-card__mods">
          Downpipe • Intake • Chargepipe • Custom burble
        </p>
      </div>
    </article>
  );
}
