import { LoaderCircle } from "lucide-react";

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">

      <LoaderCircle
        size={70}
        className="animate-spin text-blue-600"
      />

      <h2 className="text-3xl font-bold mt-8">
        Analyzing Transcript...
      </h2>

      <p className="text-gray-500 mt-3">
        Planner Agent is selecting the best tools
      </p>

    </div>
  );
}

export default LoadingSpinner;