import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { analyzeTranscript } from "../services/api";
import { useResult } from "../context/useResult";
import { motion } from "framer-motion";
import { BrainCircuit, ArrowRight, Lock, Zap } from "lucide-react";

function UploadTranscript() {
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setResult } = useResult();

  const handleAnalyze = async () => {
    if (!transcript.trim()) return;
    setLoading(true);
    try {
      const response = await analyzeTranscript(transcript);
      setResult(response.data);
      setTimeout(() => {
        navigate("/results");
      }, 1500);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  const charCount = transcript.length;
  const isReady = transcript.trim().length > 10;

  return (
    <motion.div
      className="upload-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="upload-card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="upload-header">
          <div className="upload-icon">
            <BrainCircuit size={32} />
          </div>
          <h1 className="upload-title">Analyze a Transcript</h1>
          <p className="upload-subtitle">
            Paste a customer conversation and let the AI orchestrate the analysis.
          </p>
        </div>

        <div className="upload-textarea-wrapper">
          <textarea
            className="upload-textarea"
            placeholder="Paste your customer support or sales transcript here…

Example:
Agent: Hi Sarah, I can see your account is flagged for renewal next week.
Customer: Yes, I've been thinking about upgrading but I'm not sure about the pricing.
Agent: Let me pull up the latest options for you…"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            aria-label="Customer transcript"
          />
          <span className="upload-char-count">{charCount} chars</span>
        </div>

        <button
          className="upload-btn"
          onClick={handleAnalyze}
          disabled={!isReady}
          aria-label="Analyze transcript"
        >
          <Zap size={18} />
          Analyze with AI
          <ArrowRight size={18} />
        </button>

        <p className="upload-hint">
          <Lock size={12} />
          Data is processed locally and never stored
        </p>
      </motion.div>
    </motion.div>
  );
}

export default UploadTranscript;