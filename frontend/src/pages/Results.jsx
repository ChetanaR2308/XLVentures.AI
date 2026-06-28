import CustomerSummary from "../components/CustomerSummary";
import PlannerOutput from "../components/PlannerOutput";
import RecommendationCard from "../components/RecommendationCard";
import ConfidenceGauge from "../components/ConfidenceGauge";
import { useResult } from "../context/ResultContext";
import { motion } from "framer-motion";

function Results() {
    const { result } = useResult();
    if (!result) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-2xl font-semibold">
        No analysis available. Please analyze a transcript first.
      </h2>
    </div>
  );
}

  return (
  <motion.div
    className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 p-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          AI Analysis Results
        </h1>

        <p className="text-gray-500 mt-2">
          Agentic Decision Intelligence Dashboard
        </p>
      </div>

      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
        Analysis Complete
      </div>
    </div>

    {/* Top Row */}
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <CustomerSummary crm={result.context.crm} />
      <ConfidenceGauge confidence={result.confidence} />
    </div>

    {/* Planner */}
    <PlannerOutput />

    {/* Recommendations */}
    <div className="mt-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-3xl font-bold">
          Next Best Actions
        </h2>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          {result.recommendations.length} Recommendations
        </span>
      </div>

      <div className="space-y-5">
        {result.recommendations.map((item, index) => (
          <RecommendationCard
            key={index}
            recommendation={item}
            confidence={result.confidence}
          />
        ))}
      </div>
    </div>

    {/* Explanation */}
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">
        AI Explanation
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        {result.explanation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);
}

export default Results;