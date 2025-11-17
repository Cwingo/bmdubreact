import "../styles/PartCard.css";

export default function PartCard({ part }) {
  const { name, brand, price, image, category } = part || {};

  return (
    <article className="part-card">
      <div className="part-card-img">
        <img src={image} alt={name || "Part"} loading="lazy" />
      </div>

      <div className="part-card-body">
        <h3 className="part-title">{name}</h3>
        <div className="part-meta">
          {brand && <span className="brand">{brand}</span>}
          {category && <span className="category">{category}</span>}
        </div>
        {price && <div className="part-price">{price}</div>}
      </div>
    </article>
  );
}

