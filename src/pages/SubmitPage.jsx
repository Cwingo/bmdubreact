import "./SubmitPage.css";

export default function SubmitPage() {
  return (
    <section className="page-wrap">
      <h1>Submit Your Build</h1>
      <p>Send in your car to get featured. This form will work in a later part.</p>

      <form className="submit-form">
        <div className="form-field">
          <label>Car / Model</label>
          <input type="text" placeholder="2020 BMW 540i xDrive" />
        </div>

        <div className="form-field">
          <label>Instagram / @</label>
          <input type="text" placeholder="@chris540" />
        </div>

        <div className="form-field">
          <label>Mod list</label>
          <textarea placeholder="Downpipe, tune, charge pipe, coilovers..."></textarea>
        </div>

        <button className="fake-btn" type="button">Submit Build</button>
      </form>
    </section>
  );
}
