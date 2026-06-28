import { useState } from "react";
import { CheckCircle, XCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

function RecommendationCard({ recommendation, confidence }) {
    const [status, setStatus] = useState("");
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl shadow-md p-6"
  >

      {/* Priority Badge */}
      <div className="flex justify-between items-center">

        <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

          <Star size={16} />

          High Priority

        </span>

        <span className="font-semibold text-blue-600">

          {confidence}% Confidence

        </span>

      </div>

      {/* Recommendation */}

      <h3 className="text-xl font-bold mt-5">

        {recommendation}

      </h3>

      {/* Buttons */}

      <div className="flex gap-4 mt-6">

  <button
    onClick={() => setStatus("approved")}
    className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white transition
      ${
        status === "approved"
          ? "bg-green-700"
          : "bg-green-600 hover:bg-green-700"
      }`}
  >
    <CheckCircle size={18} />
    {status === "approved" ? "Approved" : "Approve"}
  </button>

  <button
    onClick={() => setStatus("rejected")}
    className={`flex items-center gap-2 px-5 py-2 rounded-lg text-white transition
      ${
        status === "rejected"
          ? "bg-red-700"
          : "bg-red-600 hover:bg-red-700"
      }`}
  >
    <XCircle size={18} />
    {status === "rejected" ? "Rejected" : "Reject"}
  </button>

</div>

    </motion.div>
  );
}

export default RecommendationCard;