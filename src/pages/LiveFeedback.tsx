import { useState } from "react";
import { Download } from "lucide-react";
import { SentimentBadge } from "@/components/SentimentBadge";
import { UrgencyBadge } from "@/components/UrgencyBadge";
import { mockFeedback } from "@/lib/mockData";
import { cn } from "@/lib/utils";

type SentimentFilter = "all" | "positive" | "neutral" | "negative";
type UrgencyFilter = "all" | "low" | "medium" | "high";

export default function LiveFeedback() {
  const [sentimentFilter, setSentimentFilter] = useState<SentimentFilter>("all");
  const [urgencyFilter, setUrgencyFilter] = useState<UrgencyFilter>("all");

  const filtered = mockFeedback.filter((f) => {
    if (sentimentFilter !== "all" && f.sentiment !== sentimentFilter) return false;
    if (urgencyFilter !== "all" && f.urgency !== urgencyFilter) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Live Feedback</h1>
          <p className="text-sm text-muted-foreground">Real-time customer feedback stream</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors">
          <Download className="h-3.5 w-3.5" /> Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex gap-1 rounded-lg bg-muted/50 p-1">
          {(["all", "positive", "neutral", "negative"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSentimentFilter(s)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                sentimentFilter === s ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex gap-1 rounded-lg bg-muted/50 p-1">
          {(["all", "low", "medium", "high"] as const).map((u) => (
            <button
              key={u}
              onClick={() => setUrgencyFilter(u)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                urgencyFilter === u ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {u.charAt(0).toUpperCase() + u.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Feedback</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Sentiment</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Urgency</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((f) => (
                <tr key={f.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{f.customerName}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{f.text}</td>
                  <td className="px-4 py-3"><SentimentBadge sentiment={f.sentiment} /></td>
                  <td className="px-4 py-3"><UrgencyBadge urgency={f.urgency} /></td>
                  <td className="px-4 py-3">
                    <span className={cn(
                      "inline-flex rounded-full px-2 py-0.5 text-xs font-medium",
                      f.status === "open" ? "bg-warning/15 text-warning" : "bg-success/15 text-success"
                    )}>
                      {f.status.charAt(0).toUpperCase() + f.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{f.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
