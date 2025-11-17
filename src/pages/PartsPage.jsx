import { useEffect, useState } from "react";
import { fetchParts } from "../lib/api";
import PartCard from "../components/PartCard";
import "../styles/PartsPage.css";
import "../styles/PartCard.css";


export default function PartsPage() {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const items = await fetchParts(); // hits https://bmdub-server.onrender.com/parts
        setParts(items);
      } catch (e) {
        console.error(e);
        setError("Could not load parts.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <main className="page-shell">
      <h1>Parts</h1>
      {loading && <p>Loading…</p>}
      {error && <p className="error">{error}</p>}

      <section className="parts-grid">
        {parts.map((p) => (
          <PartCard
            key={p._id}
            part={{
              id: p._id,
              name: p.name,
              brand: p.brand,
              category: p.category,
              price: typeof p.price === "number" ? `$${p.price}` : p.price,
              image: p.image, 
            }}
          />
        ))}
      </section>
    </main>
  );
}
