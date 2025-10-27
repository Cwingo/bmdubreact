// src/components/Header.jsx
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="site-header">
      <div className="wrap topbar">
        <Link className="brand" to="/">
          <img src="/images/logo.png" alt="bmDub network logo" className="logo" />
          <span>bmDub network</span>
        </Link>

        <nav id="main-nav" className="nav-links">
  <Link to="/explore">Explore Builds</Link>
  <Link to="/submit">Submit Build</Link>
  <Link to="/leaderboard">Leaderboard</Link>
  <Link to="/parts">Parts Library</Link>
  <Link to="/shops">Shops Directory</Link>
  <Link to="/about">About</Link>
</nav>

      </div>
    </header>
  );
}
