import { useEffect, useState } from "react";
import { fetchParts } from "../lib/api";
import PartCard from "../components/PartCard";
import "../styles/PartsPage.css";
import "../styles/PartCard.css";

const API_BASE = "https://bmdub-server.onrender.com";

function validatePartClient(part) {
  const errors = {};

  if (!part.name || part.name.trim().length < 2 || part.name.trim().length > 100) {
    errors.name = "Name must be 2–100 characters.";
  }
  if (!part.brand || part.brand.trim().length < 2 || part.brand.trim().length > 100) {
    errors.brand = "Brand must be 2–100 characters.";
  }
  if (!part.category || part.category.trim().length < 2 || part.category.trim().length > 50) {
    errors.category = "Category must be 2–50 characters.";
  }
  if (!part.image || part.image.trim().length < 2 || part.image.trim().length > 200) {
    errors.image = "Image path must be 2–200 characters.";
  }

  if (part.price === "" || part.price === null || isNaN(part.price)) {
    errors.price = "Price must be a number.";
  } else if (Number(part.price) < 0) {
    errors.price = "Price cannot be negative.";
  }

  return errors;
}

export default function PartsPage() {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedPart, setSelectedPart] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    image: "",
    price: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" | "error"

  useEffect(() => {
    (async () => {
      try {
        const items = await fetchParts();
        setParts(items);
      } catch (e) {
        console.error(e);
        setError("Could not load parts.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function handleEditClick(part) {
    setSelectedPart(part);
    setFormData({
      name: part.name ?? "",
      brand: part.brand ?? "",
      category: part.category ?? "",
      image: part.image ?? "",
      price: part.price ?? "",
    });
    setFormErrors({});
    setStatusMessage("");
    setStatusType("");
  }

  function handleCancelEdit() {
    setSelectedPart(null);
    setFormData({
      name: "",
      brand: "",
      category: "",
      image: "",
      price: "",
    });
    setFormErrors({});
    setStatusMessage("");
    setStatusType("");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? value : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedPart) return;

    const clientErrors = validatePartClient(formData);
    setFormErrors(clientErrors);

    if (Object.keys(clientErrors).length > 0) {
      setStatusMessage("Please fix the errors in the form.");
      setStatusType("error");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/parts/${selectedPart._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          brand: formData.brand.trim(),
          category: formData.category.trim(),
          image: formData.image.trim(),
          price: Number(formData.price),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatusMessage(data.message || "Edit failed.");
        setStatusType("error");
        return;
      }

      const updated = data.item;

      setParts((prev) =>
        prev.map((p) => (p._id === updated._id ? updated : p))
      );

      setStatusMessage("Part edited successfully.");
      setStatusType("success");
      setSelectedPart(null);
      setFormData({
        name: "",
        brand: "",
        category: "",
        image: "",
        price: "",
      });
      setFormErrors({});
    } catch (err) {
      console.error(err);
      setStatusMessage("Error contacting server.");
      setStatusType("error");
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Delete this part?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API_BASE}/parts/${id}`, {
        method: "DELETE",
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatusMessage(data.message || "Delete failed.");
        setStatusType("error");
        return;
      }

      setParts((prev) => prev.filter((p) => p._id !== id));
      setStatusMessage("Part deleted successfully.");
      setStatusType("success");

      if (selectedPart && selectedPart._id === id) {
        handleCancelEdit();
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("Error contacting server.");
      setStatusType("error");
    }
  }

  return (
    <main className="page-shell">
      <h1>Parts</h1>

      {statusMessage && (
        <div
          className={
            statusType === "success"
              ? "status-banner status-banner-success"
              : "status-banner status-banner-error"
          }
        >
          {statusMessage}
        </div>
      )}

      {loading && <p>Loading…</p>}
      {error && <p className="error">{error}</p>}

      <section className="parts-grid">
        {parts.map((p) => (
          <div key={p._id} className="part-with-actions">
            <PartCard
              part={{
                id: p._id,
                name: p.name,
                brand: p.brand,
                category: p.category,
                price: typeof p.price === "number" ? `$${p.price}` : p.price,
                image: p.image,
              }}
            />
            <div className="part-actions">
              <button type="button" onClick={() => handleEditClick(p)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(p._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>

      <section className="edit-panel">
        <h2>{selectedPart ? "Edit Part" : "Select a part to edit"}</h2>

        {selectedPart && (
          <form className="edit-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <span className="field-error">{formErrors.name}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
              />
              {formErrors.brand && (
                <span className="field-error">{formErrors.brand}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
              {formErrors.category && (
                <span className="field-error">{formErrors.category}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="image">Image Path</label>
              <input
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
              {formErrors.image && (
                <span className="field-error">{formErrors.image}</span>
              )}
            </div>

            <div className="form-row">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
              />
              {formErrors.price && (
                <span className="field-error">{formErrors.price}</span>
              )}
            </div>

            <div className="form-actions">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
