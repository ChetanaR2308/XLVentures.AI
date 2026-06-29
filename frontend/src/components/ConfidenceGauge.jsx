import { motion } from "framer-motion";
import { Target } from "lucide-react";

function ConfidenceGauge({ confidence }) {
  const fillClass =
    confidence >= 80
      ? "gauge-fill gauge-fill-green"
      : confidence >= 50
      ? "gauge-fill gauge-fill-yellow"
      : "gauge-fill gauge-fill-red";

  const scoreLabel =
    confidence >= 80 ? "High Confidence" : confidence >= 50 ? "Moderate" : "Low Confidence";

  return (
    <div className="card">
      <div className="card-title">
        <div className="card-title-icon feature-icon-blue">
          <Target size={16} />
        </div>
        Confidence Score
      </div>

      <div className="gauge-score">
        <motion.div
          className="gauge-number"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {confidence}%
        </motion.div>
        <div className="gauge-label">{scoreLabel}</div>
      </div>

      <div className="gauge-track">
        <motion.div
          className={fillClass}
          initial={{ width: 0 }}
          animate={{ width: `${confidence}%` }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        />
      </div>

      <div className="gauge-legend">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

export default ConfidenceGauge;