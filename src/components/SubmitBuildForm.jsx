import { useState } from "react";
import { createBuild } from "../lib/api";
import "../styles/SubmitBuildForm.css";

export default function SubmitBuildForm() {
  const [formData, setFormData] = useState({
    car: "",
    instagram: "",
    mods: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverErrors, setServerErrors] = useState([]);

  const validate = () => {
    const newErrors = {};
    const { car, instagram, mods, image } = formData;

    if (!car || car.trim().length < 2 || car.trim().length > 100) {
      newErrors.car = "Car / Model must be 2–100 characters.";
    }

    if (!instagram || instagram.trim().length < 2 || instagram.trim().length > 50) {
      newErrors.instagram = "Instagram must be 2–50 characters.";
    }

    if (!mods || mods.trim().length < 5 || mods.trim().length > 500) {
      newErrors.mods = "Mod list must be 5–500 characters.";
    }

    if (!image) {
      newErrors.image = "Image URL is required.";
    } else {
      try {
        new URL(image.trim());
      } catch {
        newErrors.image = "Image must be a valid URL.";
      }
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("idle");
    setServerErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setServerErrors([]);

    try {
      const payload = {
        car: formData.car.trim(),
        instagram: formData.instagram.trim(),
        mods: formData.mods.trim(),
        image: formData.image.trim(),
      };

      await createBuild(payload);

      setFormData({
        car: "",
        instagram: "",
        mods: "",
        image: "",
      });

      setStatus("success");
    } catch (err) {
      console.error("Create build failed:", err);
      setStatus("error");
      setServerErrors(err.validationErrors || []);
    }
  };

  return (
    <div className="submit-build">
      <div className="submit-build__card">
        <form
          className="submit-build__grid"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="submit-build__field">
            <label className="submit-build__label" htmlFor="car">
              Car / Model
            </label>
            <input
              id="car"
              className="submit-build__input"
              type="text"
              name="car"
              placeholder="2020 BMW 540i xDrive"
              value={formData.car}
              onChange={handleChange}
            />
            {errors.car && (
              <p className="submit-build__error">{errors.car}</p>
            )}
          </div>

          <div className="submit-build__field">
            <label className="submit-build__label" htmlFor="instagram">
              Instagram / @
            </label>
            <input
              id="instagram"
              className="submit-build__input"
              type="text"
              name="instagram"
              placeholder="@chris540"
              value={formData.instagram}
              onChange={handleChange}
            />
            {errors.instagram && (
              <p className="submit-build__error">{errors.instagram}</p>
            )}
          </div>

          <div className="submit-build__field submit-build__span">
            <label className="submit-build__label" htmlFor="image">
              Image URL
            </label>
            <input
              id="image"
              className="submit-build__input"
              type="url"
              name="image"
              placeholder="https://example.com/your-car.jpg"
              value={formData.image}
              onChange={handleChange}
            />
            {errors.image && (
              <p className="submit-build__error">{errors.image}</p>
            )}
          </div>

          <div className="submit-build__field submit-build__span">
            <label className="submit-build__label" htmlFor="mods">
              Mod list
            </label>
            <textarea
              id="mods"
              className="submit-build__textarea"
              name="mods"
              placeholder="Downpipe, tune, charge pipe, coilovers..."
              rows={8}
              value={formData.mods}
              onChange={handleChange}
            />
            {errors.mods && (
              <p className="submit-build__error">{errors.mods}</p>
            )}
          </div>

          <div className="submit-build__actions submit-build__span">
            <button
              type="submit"
              className="submit-build__btn"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit Build"}
            </button>

            {status === "success" && (
              <p className="submit-build__status submit-build__status--success">
                ✅ Build submitted successfully!
              </p>
            )}

            {status === "error" && !serverErrors.length && (
              <p className="submit-build__status submit-build__status--error">
                Something went wrong submitting your build. Check your
                fields and try again.
              </p>
            )}

            {status === "error" && serverErrors.length > 0 && (
              <div className="submit-build__status submit-build__status--error">
                <p>Server rejected your submission:</p>
                <ul>
                  {serverErrors.map((err, idx) => (
                    <li key={idx}>{err.message}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
