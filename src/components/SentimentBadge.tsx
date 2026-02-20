import { cn } from "@/lib/utils";

interface SentimentBadgeProps {
  sentiment: "positive" | "neutral" | "negative";
  className?: string;
}

export function SentimentBadge({ sentiment, className }: SentimentBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        sentiment === "positive" && "bg-success/15 text-success",
        sentiment === "neutral" && "bg-primary/15 text-primary",
        sentiment === "negative" && "bg-destructive/15 text-destructive",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          sentiment === "positive" && "bg-success",
          sentiment === "neutral" && "bg-primary",
          sentiment === "negative" && "bg-destructive"
        )}
      />
      {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
    </span>
  );
}
