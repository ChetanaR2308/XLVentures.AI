import { BrainCircuit } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <BrainCircuit size={16} />
          </div>
          XLVentures AI
        </div>

        <p className="footer-copy">
          © 2025 XLVentures AI — Agentic Decision Intelligence Platform
        </p>

        <div className="footer-stack">
          <span className="footer-tag">React</span>
          <span className="footer-tag">FastAPI</span>
          <span className="footer-tag">LangGraph</span>
          <span className="footer-tag">Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;