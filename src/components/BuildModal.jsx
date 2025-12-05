import "../styles/BuildModal.css";

function BuildModal({ open, build, onClose }) {
  if (!open || !build) return null;

  const hero =
    (build.images && build.images[0] && build.images[0].src) || build.bg || "";

  const createdDate =
    build.createdAt && !Number.isNaN(build.createdAt)
      ? new Date(build.createdAt)
      : null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-panel"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {hero && (
          <div className="modal-hero">
            <img src={hero} alt={build.title} />
          </div>
        )}

        <div className="modal-content">
          <h2 className="modal-title">{build.title}</h2>
          <p className="modal-owner">{build.user}</p>

          <div className="modal-stats-row">
            <div className="stat">
              <span className="stat-label">WHP</span>
              <span className="stat-value">
                {build.whp ? build.whp : "N/A"}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">60–130</span>
              <span className="stat-value">
                {typeof build.sixty130 === "number"
                  ? `${build.sixty130}s`
                  : "N/A"}
              </span>
            </div>
            {createdDate && (
              <div className="stat">
                <span className="stat-label">Created</span>
                <span className="stat-value">
                  {createdDate.toLocaleDateString()}
                </span>
              </div>
            )}
          </div>

          {build.meta && <p className="modal-meta">{build.meta}</p>}

          <div className="modal-specs">
            {Array.isArray(build.specs) &&
              build.specs.map((s) => (
                <span key={s} className="chip dark">
                  {s}
                </span>
              ))}
          </div>

          {build.chips && build.chips.length > 0 && (
            <div className="modal-chips">
              {build.chips.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          )}

          {build.meta && (
            <section className="modal-section">
              <h3 className="modal-subtitle">Modifications</h3>
              <p>{build.meta}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuildModal;
