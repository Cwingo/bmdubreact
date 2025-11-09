import { useEffect, useState } from "react";
import { fetchParts } from "../lib/api";
import PartCard from "../components/PartCard";
import "../styles/PartCard.css";

export default function PartsPage() {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const items = await fetchParts(); 
        setParts(items);
      } catch {
        setError("Could not load parts");
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
        {parts.map(p => (
          <PartCard key={p._id} part={{
            name: p.name,
            brand: p.brand,
            price: `$${p.price}`,
            image: p.image.startsWith("http") ? p.image : (p.image), // server already serves /images/*
          }} />
        ))}
      </section>
    </main>
  );
}
