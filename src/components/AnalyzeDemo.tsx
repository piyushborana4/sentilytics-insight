import { useState } from "react";
import { Loader2, Sparkles, ArrowRight } from "lucide-react";
import { AnalysisResult } from "@/lib/types";
import { SentimentBadge } from "./SentimentBadge";
import { UrgencyBadge } from "./UrgencyBadge";

function simulateAnalysis(text: string): AnalysisResult {
  const lower = text.toLowerCase();
  const negWords = ["worst", "terrible", "cancel", "refund", "hate", "awful", "frustrated", "unacceptable", "crash", "broken"];
  const posWords = ["love", "great", "amazing", "fantastic", "excellent", "impressed", "awesome", "perfect", "wonderful"];
  const negCount = negWords.filter((w) => lower.includes(w)).length;
  const posCount = posWords.filter((w) => lower.includes(w)).length;

  let score = 50 + posCount * 15 - negCount * 20;
  score = Math.max(0, Math.min(100, score));

  const sentiment = score >= 60 ? "positive" : score <= 40 ? "negative" : "neutral";
  const urgency = score <= 20 ? "high" : score <= 40 ? "medium" : "low";

  const actions: Record<string, string> = {
    positive: "Send a thank-you note and request a review.",
    neutral: "Follow up for more details to improve experience.",
    negative: urgency === "high" ? "Immediate follow-up required — escalate to support lead." : "Schedule a follow-up within 24 hours.",
  };

  return {
    sentimentScore: score,
    confidence: 85 + Math.floor(Math.random() * 12),
    sentiment,
    urgency,
    suggestedAction: actions[sentiment],
    keywords: lower.split(/\s+/).filter((w) => w.length > 4).slice(0, 5),
  };
}

export function AnalyzeDemo({ variant = "landing" }: { variant?: "landing" | "dashboard" }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyze = () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(simulateAnalysis(text));
      setLoading(false);
    }, 1500);
  };

  const isLanding = variant === "landing";

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="glass-card p-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste customer feedback here..."
          rows={3}
          className="w-full resize-none rounded-lg bg-transparent p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <div className="flex justify-end p-2 pt-0">
          <button
            onClick={analyze}
            disabled={loading || !text.trim()}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 disabled:opacity-50"
            style={{ background: "var(--gradient-primary)" }}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="h-4 w-4" />
            )}
            {loading ? "Analyzing..." : "Analyze Now"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {loading && (
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="h-1 w-48 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-full shimmer rounded-full" style={{ background: "var(--gradient-primary)" }} />
          </div>
          <p className="text-sm text-muted-foreground">Analyzing sentiment...</p>
        </div>
      )}

      {result && (
        <div className="mt-6 animate-in glass-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Analysis Result</h3>
            <div className="flex items-center gap-2">
              <SentimentBadge sentiment={result.sentiment} />
              <UrgencyBadge urgency={result.urgency} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Sentiment Score</p>
              <p className="text-2xl font-bold text-foreground">{result.sentimentScore}<span className="text-sm text-muted-foreground">/100</span></p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">Confidence</p>
              <p className="text-2xl font-bold text-foreground">{result.confidence}<span className="text-sm text-muted-foreground">%</span></p>
            </div>
          </div>

          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
            <p className="text-xs font-medium text-primary mb-1">Suggested Action</p>
            <p className="text-sm text-foreground">{result.suggestedAction}</p>
          </div>
        </div>
      )}
    </div>
  );
}
