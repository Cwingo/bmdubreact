import { Link } from "react-router-dom";
import "./header.css";
import logo from "../images/logo.png"; 

function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link to="/" className="brand">
          <img
            src={logo}
            alt="bmDub network logo"
            className="brand-logo"
          />
          <div className="brand-text-block">
            <div className="brand-name">bmDub network</div>
            <div className="brand-stripes">
              <span className="stripe stripe-blue" />
              <span className="stripe stripe-red" />
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="main-nav">
          <Link to="/explore">Explore Builds</Link>
          <Link to="/submit">Submit Build</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/parts">Parts Library</Link>
          <Link to="/shops">Shops Directory</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>

      <div className="header-underline" />
    </header>
  );
}

export default Header;
