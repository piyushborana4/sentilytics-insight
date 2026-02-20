import { cn } from "@/lib/utils";

interface UrgencyBadgeProps {
  urgency: "low" | "medium" | "high";
  className?: string;
}

export function UrgencyBadge({ urgency, className }: UrgencyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        urgency === "low" && "bg-muted text-muted-foreground",
        urgency === "medium" && "bg-warning/15 text-warning",
        urgency === "high" && "bg-destructive/15 text-destructive",
        className
      )}
    >
      {urgency.charAt(0).toUpperCase() + urgency.slice(1)}
    </span>
  );
}
