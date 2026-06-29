import CustomerSummary from "../components/CustomerSummary";
import PlannerOutput from "../components/PlannerOutput";
import RecommendationCard from "../components/RecommendationCard";
import ConfidenceGauge from "../components/ConfidenceGauge";
import { useResult } from "../context/useResult";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lightbulb, ArrowLeft } from "lucide-react";

function Results() {
  const { result } = useResult();

  if (!result) {
    return (
      <div className="empty-state">
        <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
        <h2 className="empty-state-title">No analysis available</h2>
        <p className="empty-state-body">
          Analyze a customer transcript first to see the AI-generated recommendations here.
        </p>
        <Link to="/upload" className="btn-primary" style={{ textDecoration: "none" }}>
          <ArrowLeft size={16} />
          Analyze a Transcript
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="results-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="results-inner">
        {/* Header */}
        <div className="results-header">
          <div className="results-header-left">
            <h1>AI Analysis Results</h1>
            <p>Agentic Decision Intelligence Dashboard</p>
          </div>
          <div className="status-badge-success">
            <span className="status-dot" />
            Analysis Complete
          </div>
        </div>

        {/* Top row: Customer + Confidence */}
        <div className="grid-2">
          <CustomerSummary crm={result.context.crm} />
          <ConfidenceGauge confidence={result.confidence} />
        </div>

        {/* Planner agent */}
        <div className="results-section">
          <PlannerOutput />
        </div>

        {/* Recommendations */}
        <div className="results-section">
          <div className="results-section-header">
            <h2 className="results-section-title">Next Best Actions</h2>
            <span className="count-badge">
              {result.recommendations.length} recommendation
              {result.recommendations.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {result.recommendations.map((item, index) => (
              <RecommendationCard
                key={index}
                recommendation={item}
                confidence={result.confidence}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* AI Explanation */}
        <motion.div
          className="card results-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="card-title">
            <div className="card-title-icon feature-icon-yellow">
              <Lightbulb size={16} />
            </div>
            AI Explanation
          </div>

          <ul className="explanation-list">
            {result.explanation.map((item, index) => (
              <motion.li
                key={index}
                className="explanation-item"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.07 }}
              >
                <span className="explanation-item-dot" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Results;