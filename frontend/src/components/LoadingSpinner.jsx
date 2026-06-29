import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Check, Loader2 } from "lucide-react";

const STEPS = [
  { id: 1, label: "Reading transcript" },
  { id: 2, label: "Retrieving customer profile" },
  { id: 3, label: "Searching knowledge base" },
  { id: 4, label: "Recalling memory & history" },
  { id: 5, label: "Generating recommendations" },
];

function LoadingSpinner() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const progress = Math.round(((currentStep + 1) / STEPS.length) * 100);

  return (
    <motion.div
      className="loading-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="loading-brain"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrainCircuit size={40} />
      </motion.div>

      <h2 className="loading-title">Analyzing Transcript</h2>
      <p className="loading-subtitle">Planner Agent is orchestrating tools…</p>

      <div className="loading-steps">
        <AnimatePresence>
          {STEPS.map((step, index) => {
            const isDone   = index < currentStep;
            const isActive = index === currentStep;
            const isPending = index > currentStep;

            return (
              <motion.div
                key={step.id}
                className={`loading-step ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: isPending ? 0.4 : 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  className={`loading-step-icon ${
                    isDone ? "done" : isActive ? "active" : "pending"
                  }`}
                >
                  {isDone ? (
                    <Check size={16} />
                  ) : isActive ? (
                    <Loader2 size={16} />
                  ) : (
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--slate-400)" }}>
                      {index + 1}
                    </span>
                  )}
                </div>
                <span className={`loading-step-label ${isActive ? "active" : ""}`}>
                  {step.label}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="loading-progress-bar">
        <motion.div
          className="loading-progress-fill"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default LoadingSpinner;