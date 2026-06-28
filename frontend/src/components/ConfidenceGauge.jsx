import { motion } from "framer-motion";

function ConfidenceGauge({ confidence }) {
  let color = "bg-red-500";

  if (confidence >= 80) {
    color = "bg-green-500";
  } else if (confidence >= 50) {
    color = "bg-yellow-500";
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Confidence Score
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${confidence}%` }}
          transition={{ duration: 1 }}
          className={`${color} h-6 rounded-full`}
        />
      </div>

      <p className="text-center text-3xl font-bold mt-4">
        {confidence}%
      </p>
    </div>
  );
}

export default ConfidenceGauge;
