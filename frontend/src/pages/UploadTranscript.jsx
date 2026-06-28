import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { analyzeTranscript } from "../services/api";
import { useResult } from "../context/ResultContext";

function UploadTranscript() {
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setResult } = useResult();
  const handleAnalyze = async () => {
  if (!transcript.trim()) {
    alert("Please enter a transcript.");
    return;
  }

  setLoading(true);

  try {
    const response = await analyzeTranscript(transcript);
    setResult(response.data);
    console.log(response.data);

    setTimeout(() => {
      navigate("/results");
    }, 1500);

  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
    setLoading(false);
  }
};
  if (loading) {
  return <LoadingSpinner />;
}
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">

        <h1 className="text-3xl font-bold text-center text-slate-800">
          Upload Customer Transcript
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Paste the customer conversation below.
        </p>

        <textarea
          className="w-full h-64 mt-6 border rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste customer transcript here..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Analyze Transcript
        </button>

      </div>
    </div>
  );
}

export default UploadTranscript;