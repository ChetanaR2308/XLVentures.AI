import { Brain, Database, BookOpen, HardDrive } from "lucide-react";

function PlannerOutput() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">

      <h2 className="text-2xl font-bold mb-5">
        Planner Agent
      </h2>

      <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-6">
        AI Selected 3 Tools
      </div>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="border rounded-xl p-5 text-center">
          <Database className="mx-auto text-blue-600" size={40}/>
          <h3 className="font-semibold mt-3">CRM Tool</h3>
          <p className="text-gray-500 text-sm mt-2">
            Customer Profile Retrieved
          </p>
        </div>

        <div className="border rounded-xl p-5 text-center">
          <BookOpen className="mx-auto text-green-600" size={40}/>
          <h3 className="font-semibold mt-3">Knowledge Tool</h3>
          <p className="text-gray-500 text-sm mt-2">
            Policies & Documentation
          </p>
        </div>

        <div className="border rounded-xl p-5 text-center">
          <HardDrive className="mx-auto text-purple-600" size={40}/>
          <h3 className="font-semibold mt-3">Memory Tool</h3>
          <p className="text-gray-500 text-sm mt-2">
            Previous Interactions
          </p>
        </div>

      </div>

    </div>
  );
}

export default PlannerOutput;