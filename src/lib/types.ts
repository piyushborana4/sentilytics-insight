export interface Feedback {
  id: string;
  customerName: string;
  text: string;
  sentiment: "positive" | "neutral" | "negative";
  sentimentScore: number;
  urgency: "low" | "medium" | "high";
  status: "open" | "resolved";
  date: string;
}

export interface Alert {
  id: string;
  customerName: string;
  text: string;
  sentimentScore: number;
  date: string;
  assignedTo: string | null;
}

export interface KPIData {
  totalFeedback: number;
  positivePercent: number;
  negativePercent: number;
  highPriority: number;
}

export interface AnalysisResult {
  sentimentScore: number;
  confidence: number;
  sentiment: "positive" | "neutral" | "negative";
  urgency: "low" | "medium" | "high";
  suggestedAction: string;
  keywords: string[];
}

export interface AnalyticsData {
  sentimentByProduct: { product: string; positive: number; neutral: number; negative: number }[];
  weeklyTrend: { day: string; positive: number; neutral: number; negative: number }[];
}
