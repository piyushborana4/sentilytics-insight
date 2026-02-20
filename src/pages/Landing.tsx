import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Bell, Brain, Zap } from "lucide-react";
import { AnalyzeDemo } from "@/components/AnalyzeDemo";

const features = [
  { icon: Brain, title: "Real-time Sentiment Scoring", desc: "AI classifies feedback instantly with confidence scoring." },
  { icon: Bell, title: "Urgent Issue Detection", desc: "Critical complaints auto-flagged and escalated." },
  { icon: BarChart3, title: "Actionable Insights", desc: "Visual analytics reveal trends and patterns." },
  { icon: Zap, title: "Team Notifications", desc: "Alert the right people when issues arise." },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg" style={{ background: "var(--gradient-primary)" }} />
          <span className="text-lg font-bold text-foreground">Sentilytics AI</span>
        </div>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-primary-foreground transition-all"
          style={{ background: "var(--gradient-primary)" }}
        >
          Dashboard <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center px-6 pt-20 pb-16 text-center lg:pt-32">
        <div className="animate-in mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <Sparkle /> AI-Powered Sentiment Analysis
        </div>
        <h1 className="animate-in animate-in-delay-1 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Understand Your Customers{" "}
          <span className="gradient-text">in Real-Time</span>
        </h1>
        <p className="animate-in animate-in-delay-2 mt-6 max-w-xl text-lg text-muted-foreground">
          AI-powered sentiment analysis & complaint detection that helps you respond faster and keep customers happy.
        </p>

        <div className="animate-in animate-in-delay-3 mt-12 w-full max-w-2xl">
          <AnalyzeDemo variant="landing" />
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 pb-24 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className={`animate-in animate-in-delay-${i + 1} glass-card-hover p-6`}>
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech badges */}
      <section className="relative z-10 flex justify-center gap-3 pb-16">
        {["React", "Tailwind", "OpenAI", "PostgreSQL"].map((t) => (
          <span key={t} className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
            {t}
          </span>
        ))}
      </section>
    </div>
  );
}

function Sparkle() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
    </svg>
  );
}
