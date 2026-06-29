import { Link } from "react-router-dom";
import {
  Brain,
  Database,
  BookOpen,
  ArrowRight,
  Zap,
  ShieldCheck,
  BarChart3,
  CheckCircle,
  HardDrive,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] },
});

const FEATURES = [
  {
    icon: Brain,
    colorClass: "feature-icon-indigo",
    title: "Planner Agent",
    desc: "An intelligent orchestrator that decides which enterprise tools to call before generating any recommendation.",
  },
  {
    icon: Database,
    colorClass: "feature-icon-blue",
    title: "CRM Integration",
    desc: "Retrieves full customer profiles, tier status, and account history in milliseconds.",
  },
  {
    icon: BookOpen,
    colorClass: "feature-icon-yellow",
    title: "Knowledge Base",
    desc: "Searches policies, documentation, and enterprise best practices to ground every decision.",
  },
  {
    icon: HardDrive,
    colorClass: "feature-icon-violet",
    title: "Customer Memory",
    desc: "Recalls previous interactions and conversation context for highly personalised actions.",
  },
  {
    icon: BarChart3,
    colorClass: "feature-icon-green",
    title: "Explainable AI",
    desc: "Every recommendation comes with a confidence score and human-readable reasoning chain.",
  },
  {
    icon: ShieldCheck,
    colorClass: "feature-icon-cyan",
    title: "Enterprise Ready",
    desc: "Built with LangGraph and FastAPI for reliable, auditable, production-grade agentic workflows.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Paste the transcript",
    desc: "Drop in any customer support or sales conversation text.",
  },
  {
    num: "02",
    title: "Planner selects tools",
    desc: "The AI decides which of CRM, Knowledge Base, or Memory it needs.",
  },
  {
    num: "03",
    title: "Agents run in parallel",
    desc: "Each tool retrieves relevant data simultaneously for speed.",
  },
  {
    num: "04",
    title: "Get Next Best Actions",
    desc: "Review explainable, prioritised recommendations and approve or reject.",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-grid-overlay" />

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp(0)}>
            <span className="hero-badge">
              <span className="hero-badge-dot" />
              Agentic Decision Intelligence
            </span>
          </motion.div>

          <motion.h1 className="hero-title" {...fadeUp(0.1)}>
            Turn customer conversations{" "}
            <span className="hero-title-gradient">into intelligent actions</span>
          </motion.h1>

          <motion.p className="hero-subtitle" {...fadeUp(0.2)}>
            XLVentures AI analyzes transcripts using a Planner Agent, live CRM data,
            a Knowledge Base, and Customer Memory to generate explainable Next Best Actions.
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.3)}>
            <Link to="/upload" className="btn-primary">
              Analyze a Transcript
              <ArrowRight size={18} />
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              How it works
            </a>
          </motion.div>

          <motion.div className="trust-row" {...fadeUp(0.4)}>
            {["No hallucinations", "Confidence scored", "Fully explainable"].map((t) => (
              <div className="trust-badge" key={t}>
                <CheckCircle size={14} />
                {t}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">Platform capabilities</p>
          <h2 className="section-title">Everything a support agent needs</h2>
          <p className="section-subtitle">
            A full agentic pipeline that understands context, retrieves knowledge,
            and recommends actions — automatically.
          </p>
        </motion.div>

        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="feature-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className={`feature-icon ${f.colorClass}`}>
                <f.icon size={24} />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="steps-section" id="how-it-works">
        <div className="steps-inner">
          <motion.h2
            className="steps-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            From transcript to action in seconds
          </motion.h2>

          <div className="steps-grid">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.num}
                className="step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="step-number">{s.num}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;