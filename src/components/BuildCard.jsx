import "../styles/BuildCard.css";
import { API_BASE_URL } from "../lib/api";

function resolveImage(img) {
  if (!img) return "";
  if (img.startsWith("http")) return img;
  return `${API_BASE_URL}${img}`;
}

export default function BuildCard({ build, onClick }) {
  const imgSrc = resolveImage(build.image);

  return (
    <article className="build-card" onClick={onClick}>
      <div
        className="build-card-img"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />
      <div className="build-card-body">
        <div className="build-card-toprow">
          <h3 className="build-card-title">{build.title}</h3>
          <strong className="build-card-whp">
            {build.whp ? `${build.whp} whp` : "—"}
          </strong>
        </div>
        <div className="build-card-meta">{build.meta}</div>
      </div>
    </article>
  );
}
