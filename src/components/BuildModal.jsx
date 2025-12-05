import "../styles/BuildModal.css";

function BuildModal({ open, build, onClose }) {
  if (!open || !build) return null;

  const mainImg =
    build.image ||
    (Array.isArray(build.images) && build.images.length > 0
      ? build.images[0].src
      : "");

  const createdDate =
    typeof build.createdAt === "number"
      ? new Date(build.createdAt)
      : build.createdAt instanceof Date
      ? build.createdAt
      : null;

  const createdLabel = createdDate
    ? createdDate.toLocaleDateString(undefined, {
        month: "numeric",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-shell"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {mainImg && <img className="modal-img" src={mainImg} alt={build.title} />}

        <h2 className="modal-title">{build.title}</h2>
        <p className="modal-sub">@{build.user || build.instagram}</p>

        <div className="modal-spec-row">
          <div className="spec-block">
            <span className="spec-label">WHP</span>
            <span className="spec-value">
              {typeof build.whp === "number" && build.whp > 0 ? build.whp : "N/A"}
            </span>
          </div>
          <div className="spec-block">
            <span className="spec-label">60–130</span>
            <span className="spec-value">
              {typeof build.sixty130 === "number" && build.sixty130 > 0
                ? `${build.sixty130}s`
                : "N/A"}
            </span>
          </div>
          <div className="spec-block">
            <span className="spec-label">Created</span>
            <span className="spec-value">{createdLabel}</span>
          </div>
        </div>

        <div className="modal-chips">
          {Array.isArray(build.chips) &&
            build.chips.map((c) => (
              <span key={c} className="chip dark">
                {c}
              </span>
            ))}
        </div>

        <h3 className="modal-subheading">Modifications</h3>
        <p className="modal-text">{build.meta || build.mods}</p>
      </div>
    </div>
  );
}

export default BuildModal;

