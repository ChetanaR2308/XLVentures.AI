import { BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <BrainCircuit size={34} className="text-blue-400" />

          <div>
            <h1 className="text-xl font-bold">
              XLVentures AI
            </h1>

            <p className="text-xs text-gray-400">
              Agentic Decision Intelligence
            </p>
          </div>
        </Link>

        <div className="flex gap-6 font-medium">

          <Link
            to="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            to="/upload"
            className="hover:text-blue-400 transition"
          >
            Analyze
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;