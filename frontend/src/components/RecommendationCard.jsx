import { useState } from "react";
import { CheckCircle, XCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

function RecommendationCard({ recommendation, confidence, index }) {
  const [status, setStatus] = useState("");

  const handleApprove = () => setStatus(status === "approved" ? "" : "approved");
  const handleReject  = () => setStatus(status === "rejected" ? "" : "rejected");

  return (
    <motion.div
      className="reco-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
    >
      <div className="reco-header">
        <span className="reco-priority">
          <Star size={12} />
          High Priority
        </span>
        <span className="reco-confidence">{confidence}% Confidence</span>
      </div>

      <p className="reco-text">{recommendation}</p>

      <div className="reco-actions">
        <button
          onClick={handleApprove}
          className={`reco-btn-approve${status === "approved" ? " selected" : ""}`}
          aria-label="Approve recommendation"
        >
          <CheckCircle size={16} />
          {status === "approved" ? "Approved" : "Approve"}
        </button>
        <button
          onClick={handleReject}
          className={`reco-btn-reject${status === "rejected" ? " selected" : ""}`}
          aria-label="Reject recommendation"
        >
          <XCircle size={16} />
          {status === "rejected" ? "Rejected" : "Reject"}
        </button>
      </div>
    </motion.div>
  );
}

export default RecommendationCard;