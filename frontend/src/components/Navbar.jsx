import { BrainCircuit } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo-icon">
            <BrainCircuit size={20} />
          </div>
          <div>
            <div className="navbar-brand-name">XLVentures AI</div>
            <div className="navbar-brand-sub">Agentic Decision Intelligence</div>
          </div>
        </Link>

        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={`navbar-link${isActive("/") ? " active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/upload"
              className={`navbar-cta${isActive("/upload") ? " active" : ""}`}
            >
              Analyze Transcript
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;