import { Link } from "react-router-dom";
import { Brain, Database, BookOpen, ArrowRight, Bot } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Bot size={70} className="mx-auto text-blue-400" />

          <h1 className="text-6xl font-bold mt-6">
            XLVentures AI
          </h1>

          <p className="text-2xl text-blue-300 mt-3">
            Agentic Decision Intelligence Platform
          </p>

          <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg leading-8">
            Analyze customer conversations using AI Planner,
            CRM data, Knowledge Base and Customer Memory
            to generate explainable Next Best Actions.
          </p>

          <Link to="/upload">
            <button className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 mx-auto transition">
              Start Analysis
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-24 pb-20">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 shadow-xl"
          >
            <Brain size={45} className="text-blue-400" />

            <h2 className="text-2xl font-bold mt-5">
              Planner Agent
            </h2>

            <p className="mt-4 text-gray-300">
              Decides which enterprise tools should be used before making recommendations.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 shadow-xl"
          >
            <Database size={45} className="text-green-400" />

            <h2 className="text-2xl font-bold mt-5">
              CRM + Memory
            </h2>

            <p className="mt-4 text-gray-300">
              Retrieves customer profile, history and previous interactions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 rounded-2xl p-8 shadow-xl"
          >
            <BookOpen size={45} className="text-yellow-400" />

            <h2 className="text-2xl font-bold mt-5">
              Knowledge Base
            </h2>

            <p className="mt-4 text-gray-300">
              Searches policies, documentation and enterprise best practices.
            </p>
          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Home;