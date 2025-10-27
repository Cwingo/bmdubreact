import "./PartsPage.css";
import PartCard from "../components/PartCard.jsx";

export default function PartsPage() {
  return (
    <section className="page-wrap">
      <h1>Parts Library</h1>
      <p>Popular upgrades for B58 cars and daily drivable builds.</p>

      <section className="parts-grid">
        <PartCard
          img="/images/downpipe.png"
          name="High-Flow Downpipe"
          blurb="Frees turbo, louder exhaust, more burble. Needs a tune."
          tag="Performance"
        />

        <PartCard
          img="/images/coilover.png"
          name="Coilovers"
          blurb="Lower stance and tighter handling without killing ride quality."
          tag="Suspension"
        />

        <PartCard
          img="/images/intercooler.png"
          name="Upgraded Intercooler"
          blurb="Cooler intake temps under boost. Helps keep power consistent."
          tag="Cooling"
        />

        <PartCard
          img="/images/chargepipe.png"
          name="Aluminum Charge Pipe"
          blurb="Replaces weak plastic charge pipe so it doesn't pop under boost."
          tag="Reliability"
        />
      </section>
    </section>
  );
}
