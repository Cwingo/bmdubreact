import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const lineRef = useRef(null);
  const progressRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 8);

      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = pct + "%";
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    moveMagicLineToActive();
    function onResize() {
      moveMagicLineToActive();
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line
  }, [location.pathname]);

  function moveMagicLineTo(el) {
    if (!el || !lineRef.current) return;
    const rect = el.getBoundingClientRect();
    const parent = navRef.current?.getBoundingClientRect();
    if (!parent) return;
    const left = rect.left - parent.left;
    lineRef.current.style.width = rect.width + "px";
    lineRef.current.style.transform = `translateX(${left}px)`;
    lineRef.current.style.opacity = 1;
  }

  function moveMagicLineToActive() {
    const active = navRef.current?.querySelector(".nav-link.active");
    moveMagicLineTo(active);
  }

  function handleEnter(e) {
    moveMagicLineTo(e.currentTarget);
  }

  function handleLeave() {
    moveMagicLineToActive();
  }

  function linkCls({ isActive }) {
    return "nav-link" + (isActive ? " active" : "");
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className={`scroll-progress`} ref={progressRef} />
      <div className={`bar ${scrolled ? "is-shrink" : ""}`}>
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="bmDub network" className="brand-logo" />
          <span className="brand-text">BMDUB NETWORK</span>
        </Link>

        <button
          className={`hamburger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          ref={navRef}
          className={`nav ${open ? "nav-open" : ""}`}
          onClick={() => setOpen(false)}
          onMouseLeave={handleLeave}
        >
          <NavLink className={linkCls} to="/" onMouseEnter={handleEnter}>
            Home
          </NavLink>
          <NavLink className={linkCls} to="/explore" onMouseEnter={handleEnter}>
            Explore
          </NavLink>
          <NavLink className={linkCls} to="/submit" onMouseEnter={handleEnter}>
            Submit Build
          </NavLink>
          <NavLink
            className={linkCls}
            to="/leaderboard"
            onMouseEnter={handleEnter}
          >
            Leaderboard
          </NavLink>
          <NavLink className={linkCls} to="/parts" onMouseEnter={handleEnter}>
            Parts
          </NavLink>
          <NavLink className={linkCls} to="/shops" onMouseEnter={handleEnter}>
            Shops
          </NavLink>
          <NavLink className={linkCls} to="/about" onMouseEnter={handleEnter}>
            About
          </NavLink>

          <div aria-hidden className="magic-line" ref={lineRef} />
        </nav>
      </div>
      <div className="bmw-stripe" />
    </header>
  );
}
