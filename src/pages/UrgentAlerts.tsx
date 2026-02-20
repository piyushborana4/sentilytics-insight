import { useState } from "react";
import { AlertTriangle, UserPlus, CheckCircle } from "lucide-react";
import { urgentAlerts } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export default function UrgentAlerts() {
  const [alerts, setAlerts] = useState(urgentAlerts);

  const resolve = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Urgent Alerts</h1>
          <p className="text-sm text-muted-foreground">{alerts.length} critical complaints require attention</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/15 px-3 py-1 text-xs font-medium text-destructive">
          <AlertTriangle className="h-3.5 w-3.5" />
          {alerts.length} Active
        </span>
      </div>

      {alerts.length === 0 && (
        <div className="glass-card flex flex-col items-center justify-center py-16">
          <CheckCircle className="h-12 w-12 text-success mb-4" />
          <p className="text-foreground font-medium">All clear!</p>
          <p className="text-sm text-muted-foreground">No urgent alerts at the moment.</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="glass-card border-destructive/30 p-5 space-y-3 transition-all duration-300 hover:border-destructive/50"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{alert.customerName}</p>
                <p className="text-xs text-muted-foreground">{alert.date}</p>
              </div>
              <div className="rounded-full bg-destructive/15 p-1.5">
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{alert.text}</p>
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-destructive"
                  style={{ width: `${100 - alert.sentimentScore}%` }}
                />
              </div>
              <span className="text-xs text-destructive font-medium">{alert.sentimentScore}/100</span>
            </div>
            <div className="flex gap-2 pt-1">
              <button className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors">
                <UserPlus className="h-3.5 w-3.5" /> Assign Agent
              </button>
              <button
                onClick={() => resolve(alert.id)}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-primary-foreground transition-colors"
                style={{ background: "var(--gradient-primary)" }}
              >
                <CheckCircle className="h-3.5 w-3.5" /> Resolve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
