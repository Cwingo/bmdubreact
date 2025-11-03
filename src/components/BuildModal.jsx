import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/BuildModal.css";

/* sections: hook */
function useLockBody(lock) {
  useEffect(() => {
    if (!lock) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [lock]);
}

/* sections: component */
export default function BuildModal({ open, onClose, build }) {
  const slides = useMemo(() => build?.images || [], [build]);
  const [i, setI] = useState(0);
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  useLockBody(open);

  useEffect(() => { setI(0); }, [open, build]);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") setI((v) => (v + 1) % Math.max(slides.length, 1));
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + Math.max(slides.length, 1)) % Math.max(slides.length, 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, slides.length, onClose]);

  useEffect(() => {
    if (!open) return;
    const el = trackRef.current;
    if (!el) return;
    let sx = 0, dx = 0;
    function ts(e){ sx = e.touches[0].clientX; dx = 0; }
    function tm(e){ dx = e.touches[0].clientX - sx; }
    function te(){
      if (Math.abs(dx) > 40) setI((v)=> dx < 0 ? (v+1)%slides.length : (v-1+slides.length)%slides.length);
      sx = 0; dx = 0;
    }
    el.addEventListener("touchstart", ts, { passive:true });
    el.addEventListener("touchmove", tm, { passive:true });
    el.addEventListener("touchend", te);
    return () => {
      el.removeEventListener("touchstart", ts);
      el.removeEventListener("touchmove", tm);
      el.removeEventListener("touchend", te);
    };
  }, [open, slides.length]);

  if (!open || !build) return null;

  return (
    <div className="bm-wrap" ref={wrapRef} onClick={(e)=>{ if (e.target === wrapRef.current) onClose?.(); }}>
      <div className="bm-card">
        <button className="bm-close" aria-label="Close" onClick={onClose}>×</button>

        <div className="bm-media">
          <div className="bm-progress" style={{ width: `${((i+1)/Math.max(slides.length,1))*100}%` }} />
          <div className="bm-track" ref={trackRef}>
            {slides.map((s, idx) => (
              <figure key={idx} className={`bm-slide ${idx===i ? "is-active":""}`} aria-hidden={idx!==i}>
                {s?.src ? <img src={s.src} alt={s.alt || build.title || "Build"} /> : <div className="bm-ph">No image</div>}
                {(build.title || build.subtitle) && (
                  <figcaption className="bm-cap">
                    {build.title && <div className="bm-cap-title">{build.title}</div>}
                    {build.subtitle && <div className="bm-cap-sub">{build.subtitle}</div>}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>

          {slides.length > 1 && (
            <>
              <button className="bm-arrow left" aria-label="Prev" onClick={()=>setI((v)=>(v-1+slides.length)%slides.length)}>‹</button>
              <button className="bm-arrow right" aria-label="Next" onClick={()=>setI((v)=>(v+1)%slides.length)}>›</button>
            </>
          )}
        </div>

        <div className="bm-info">
          <div className="bm-title-row">
            <h3 className="bm-title">{build.title || "Build"}</h3>
            {build.user && <span className="bm-user">{build.user}</span>}
          </div>

          {build.specs && (
            <ul className="bm-specs">
              {build.specs.map((s, idx)=> <li key={idx}>{s}</li>)}
            </ul>
          )}

          {slides.length > 1 && (
            <div className="bm-dots" role="tablist" aria-label="Slides">
              {slides.map((_, idx)=> (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={idx===i}
                  className={`bm-dot ${idx===i ? "active":""}`}
                  onClick={()=>setI(idx)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
