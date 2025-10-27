import "./ShopsPage.css";

export default function ShopsPage() {
  return (
    <section className="page-wrap">
      <h1>Shops Directory</h1>
      <p>
        Local BMW-friendly shops for tuning, installs, wraps, exhaust work, and more.
        (This is where I’ll list trusted places.)
      </p>

      <section className="shops-grid">
        <article className="shop-card">
          <h2 className="shop-name">B58 Performance Garage</h2>
          <p className="shop-desc">
            Specializes in BMW turbo cars. Tunes, downpipes, plugs, and diagnostics.
          </p>
          <p className="shop-tagline">Stage 1 / Stage 2 support</p>
        </article>

        <article className="shop-card">
          <h2 className="shop-name">Euro Wrap & Detail</h2>
          <p className="shop-desc">
            Vinyl wraps, paint correction, ceramic, interior detailing.
          </p>
          <p className="shop-tagline">Full body wrap-friendly</p>
        </article>

        <article className="shop-card">
          <h2 className="shop-name">Custom Exhaust Lab</h2>
          <p className="shop-desc">
            Midpipe / muffler work, burble-friendly setups, stainless and tig welds.
          </p>
          <p className="shop-tagline">Can make it loud</p>
        </article>
      </section>
    </section>
  );
}
