import "../styles/BuildModal.css";

function formatDate(ts) {
  if (!ts) return "N/A";
  const d = new Date(ts);
  if (Number.isNaN(d.getTime())) return "N/A";
  return d.toLocaleDateString();
}

export default function BuildModal({ open, build, onClose }) {
  if (!open || !build) return null;

  const img =
    (Array.isArray(build.images) && build.images[0]?.src) || build.bg || "";

  const whpLabel =
    typeof build.whp === "number" && build.whp > 0 ? build.whp : "N/A";

  const sixtyLabel =
    typeof build.sixty130 === "number" && build.sixty130 > 0
      ? build.sixty130
      : "N/A";

  return (
    <div className="build-modal-overlay" onClick={onClose}>
      <div className="build-modal" onClick={(e) => e.stopPropagation()}>
        <button className="build-modal-close" onClick={onClose}>
          ×
        </button>

        {img && (
          <img className="build-modal-image" src={img} alt={build.title} />
        )}

        <div className="build-modal-content">
          <header className="build-modal-header">
            <h2 className="build-modal-title">{build.title}</h2>
            <p className="build-modal-user">
              {build.user || build.instagram}
            </p>
          </header>

          <div className="build-modal-stats">
            <div className="stat">
              <span className="stat-label">WHP</span>
              <span className="stat-value">{whpLabel}</span>
            </div>
            <div className="stat">
              <span className="stat-label">60–130</span>
              <span className="stat-value">{sixtyLabel}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Created</span>
              <span className="stat-value">
                {formatDate(build.createdAt)}
              </span>
            </div>
          </div>

          <div className="build-modal-chips">
            {Array.isArray(build.chips) &&
              build.chips.map((c) => (
                <span key={c} className="chip dark">
                  {c}
                </span>
              ))}
          </div>

          <section className="build-modal-section">
            <h3 className="build-modal-subtitle">Modifications</h3>
            <p className="build-modal-text">{build.meta || build.mods}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
