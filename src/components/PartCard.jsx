import "./PartCard.css";

export default function PartCard(props) {
  const { img, name, blurb, tag } = props;

  return (
    <article className="part-card">
      <img src={img} alt={name} className="part-card__img" />

      <div className="part-card__body">
        <h2 className="part-card__title">
          {name}
          {tag && <span className="part-card__badge">{tag}</span>}
        </h2>

        <p className="part-card__blurb">{blurb}</p>
      </div>
    </article>
  );
}
