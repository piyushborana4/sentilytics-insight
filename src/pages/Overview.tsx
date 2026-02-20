import { MessageSquare, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { KPICard } from "@/components/KPICard";
import { SentimentBadge } from "@/components/SentimentBadge";
import { UrgencyBadge } from "@/components/UrgencyBadge";
import { kpiData, sentimentDistribution, weeklyTrend, mockFeedback } from "@/lib/mockData";

const flaggedFeedback = mockFeedback.filter((f) => f.urgency === "high").slice(0, 5);

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Overview</h1>
        <p className="text-sm text-muted-foreground">Real-time sentiment analysis at a glance</p>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard title="Total Analyzed" value={kpiData.totalFeedback.toLocaleString()} icon={MessageSquare} trend="12% vs last week" trendUp />
        <KPICard title="Positive" value={`${kpiData.positivePercent}%`} icon={TrendingUp} trend="+3% improvement" trendUp />
        <KPICard title="Negative" value={`${kpiData.negativePercent}%`} icon={TrendingDown} trend="-2% reduced" trendUp />
        <KPICard title="High Priority" value={kpiData.highPriority} icon={AlertTriangle} trend="5 new today" trendUp={false} />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="glass-card p-6 lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Sentiment Distribution</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={sentimentDistribution} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={4} dataKey="value">
                {sentimentDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {sentimentDistribution.map((s) => (
              <div key={s.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full" style={{ background: s.fill }} />
                {s.name} {s.value}%
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 lg:col-span-3">
          <h3 className="mb-4 text-sm font-semibold text-foreground">Weekly Sentiment Trend</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={weeklyTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 16%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(215, 20%, 55%)" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(222, 40%, 10%)", border: "1px solid hsl(222, 30%, 16%)", borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="positive" stroke="hsl(142, 71%, 45%)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="neutral" stroke="hsl(217, 91%, 60%)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="negative" stroke="hsl(0, 72%, 55%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Flagged complaints */}
      <div className="glass-card p-6">
        <h3 className="mb-4 text-sm font-semibold text-foreground">Recent Flagged Complaints</h3>
        <div className="space-y-3">
          {flaggedFeedback.map((f) => (
            <div key={f.id} className="flex items-start justify-between gap-4 rounded-lg bg-muted/30 p-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-foreground">{f.customerName}</p>
                <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{f.text}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <SentimentBadge sentiment={f.sentiment} />
                <UrgencyBadge urgency={f.urgency} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
