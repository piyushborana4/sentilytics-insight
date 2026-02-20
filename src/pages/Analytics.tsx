import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Lightbulb } from "lucide-react";
import { sentimentByProduct, aiInsights, commonKeywords } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground">Deep insights into customer sentiment</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sentiment by product */}
        <div className="glass-card p-6 lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Sentiment by Product</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={sentimentByProduct} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 16%)" />
              <XAxis dataKey="product" tick={{ fontSize: 12, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(222, 40%, 10%)", border: "1px solid hsl(222, 30%, 16%)", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="positive" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="neutral" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="negative" fill="hsl(0, 72%, 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Word cloud (simple) */}
        <div className="glass-card p-6">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Common Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {commonKeywords.map((kw) => {
              const size = Math.max(11, Math.min(20, kw.weight / 3 + 8));
              const opacity = Math.max(0.4, kw.weight / 50);
              return (
                <span
                  key={kw.text}
                  className="text-primary transition-opacity hover:opacity-100"
                  style={{ fontSize: `${size}px`, opacity }}
                >
                  {kw.text}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="rounded-lg p-1.5" style={{ background: "var(--gradient-primary)" }}>
            <Lightbulb className="h-4 w-4 text-primary-foreground" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">AI Insights</h3>
        </div>
        <div className="space-y-3">
          {aiInsights.map((insight, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg bg-muted/30 p-3 transition-colors hover:bg-muted/50"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                {i + 1}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
