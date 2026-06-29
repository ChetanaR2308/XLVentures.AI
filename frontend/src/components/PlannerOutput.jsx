import { Database, BookOpen, HardDrive, Zap } from "lucide-react";
import { motion } from "framer-motion";

const TOOLS = [
  {
    icon: Database,
    name: "CRM Tool",
    desc: "Customer profile retrieved",
    colorClass: "feature-icon-blue",
  },
  {
    icon: BookOpen,
    name: "Knowledge Tool",
    desc: "Policies & documentation",
    colorClass: "feature-icon-green",
  },
  {
    icon: HardDrive,
    name: "Memory Tool",
    desc: "Previous interactions",
    colorClass: "feature-icon-violet",
  },
];

function PlannerOutput() {
  return (
    <div className="card results-section">
      <div className="card-title">
        <div className="card-title-icon feature-icon-yellow">
          <Zap size={16} />
        </div>
        Planner Agent
      </div>

      <div className="planner-badge">
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--blue-500)",
            display: "inline-block",
          }}
        />
        AI selected 3 tools
      </div>

      <div className="planner-tools-grid">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            className="tool-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
          >
            <div className={`tool-icon ${tool.colorClass}`}>
              <tool.icon size={22} />
            </div>
            <div className="tool-name">{tool.name}</div>
            <div className="tool-desc">{tool.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PlannerOutput;