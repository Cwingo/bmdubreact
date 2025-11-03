// sections
import "../styles/SubmitBuildForm.css";

export default function SubmitBuildForm() {
  return (
    <div className="submit-build">
      <div className="submit-build__card">
        <form
          action="https://formspree.io/f/xovpbqgp"
          method="POST"
          className="submit-build__grid"
        >
          {/* row */}
          <div className="submit-build__field">
            <label className="submit-build__label">Car / Model</label>
            <input
              className="submit-build__input"
              type="text"
              name="car"
              placeholder="2020 BMW 540i xDrive"
              required
            />
          </div>

          <div className="submit-build__field">
            <label className="submit-build__label">Instagram / @</label>
            <input
              className="submit-build__input"
              type="text"
              name="instagram"
              placeholder="@chris540"
              required
            />
          </div>

          {/* row span */}
          <div className="submit-build__field submit-build__span">
            <label className="submit-build__label">Mod list</label>
            <textarea
              className="submit-build__textarea"
              name="mods"
              placeholder="Downpipe, tune, charge pipe, coilovers..."
              rows={8}
              required
            />
          </div>

          {/* actions */}
          <div className="submit-build__actions submit-build__span">
            <button type="submit" className="submit-build__btn">
              Submit Build
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
