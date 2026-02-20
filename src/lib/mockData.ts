import { Feedback, Alert, AnalyticsData, KPIData } from "./types";

export const kpiData: KPIData = {
  totalFeedback: 12847,
  positivePercent: 64,
  negativePercent: 18,
  highPriority: 23,
};

export const mockFeedback: Feedback[] = [
  { id: "1", customerName: "Sarah Chen", text: "The new update is fantastic! Loading times have improved significantly and the UI is much cleaner.", sentiment: "positive", sentimentScore: 92, urgency: "low", status: "resolved", date: "2026-02-20" },
  { id: "2", customerName: "Michael Torres", text: "I've been waiting 3 weeks for my refund and no one has responded to my emails. This is unacceptable.", sentiment: "negative", sentimentScore: 15, urgency: "high", status: "open", date: "2026-02-20" },
  { id: "3", customerName: "Emily Johnson", text: "The product works fine but the onboarding process could be simplified. Too many steps.", sentiment: "neutral", sentimentScore: 52, urgency: "medium", status: "open", date: "2026-02-19" },
  { id: "4", customerName: "David Park", text: "Absolutely love the analytics dashboard. It gives me exactly the insights I need for my business.", sentiment: "positive", sentimentScore: 88, urgency: "low", status: "resolved", date: "2026-02-19" },
  { id: "5", customerName: "Lisa Wang", text: "Your customer support is the worst I've ever experienced. I'm cancelling my subscription immediately.", sentiment: "negative", sentimentScore: 8, urgency: "high", status: "open", date: "2026-02-18" },
  { id: "6", customerName: "James Miller", text: "The API documentation is comprehensive and easy to follow. Great developer experience!", sentiment: "positive", sentimentScore: 85, urgency: "low", status: "resolved", date: "2026-02-18" },
  { id: "7", customerName: "Anna Rodriguez", text: "Payment failed twice and I was charged double. Need immediate resolution.", sentiment: "negative", sentimentScore: 5, urgency: "high", status: "open", date: "2026-02-17" },
  { id: "8", customerName: "Tom Wilson", text: "Decent product overall. Nothing extraordinary but gets the job done.", sentiment: "neutral", sentimentScore: 50, urgency: "low", status: "resolved", date: "2026-02-17" },
  { id: "9", customerName: "Rachel Kim", text: "The mobile app crashes every time I try to upload files. Extremely frustrating!", sentiment: "negative", sentimentScore: 12, urgency: "high", status: "open", date: "2026-02-16" },
  { id: "10", customerName: "Chris Brown", text: "Switched from a competitor and the migration was seamless. Very impressed!", sentiment: "positive", sentimentScore: 90, urgency: "low", status: "resolved", date: "2026-02-16" },
];

export const urgentAlerts: Alert[] = mockFeedback
  .filter((f) => f.urgency === "high" && f.status === "open")
  .map((f) => ({
    id: f.id,
    customerName: f.customerName,
    text: f.text,
    sentimentScore: f.sentimentScore,
    date: f.date,
    assignedTo: null,
  }));

export const sentimentDistribution = [
  { name: "Positive", value: 64, fill: "hsl(142, 71%, 45%)" },
  { name: "Neutral", value: 18, fill: "hsl(217, 91%, 60%)" },
  { name: "Negative", value: 18, fill: "hsl(0, 72%, 55%)" },
];

export const weeklyTrend = [
  { day: "Mon", positive: 65, neutral: 20, negative: 15 },
  { day: "Tue", positive: 60, neutral: 22, negative: 18 },
  { day: "Wed", positive: 70, neutral: 15, negative: 15 },
  { day: "Thu", positive: 58, neutral: 25, negative: 17 },
  { day: "Fri", positive: 72, neutral: 14, negative: 14 },
  { day: "Sat", positive: 68, neutral: 18, negative: 14 },
  { day: "Sun", positive: 64, neutral: 18, negative: 18 },
];

export const sentimentByProduct = [
  { product: "App", positive: 75, neutral: 15, negative: 10 },
  { product: "API", positive: 82, neutral: 10, negative: 8 },
  { product: "Support", positive: 45, neutral: 20, negative: 35 },
  { product: "Billing", positive: 50, neutral: 18, negative: 32 },
  { product: "Docs", positive: 88, neutral: 8, negative: 4 },
];

export const aiInsights = [
  "Customers are unhappy about delivery delays — 34% of negative feedback mentions shipping.",
  "Positive sentiment trending up +8% over last 7 days, driven by the v2.4 release.",
  "Support response time is the #1 driver of negative sentiment this month.",
  "Product API has the highest satisfaction rate at 82% positive.",
  "Billing-related complaints spiked 12% after the pricing change on Feb 10.",
];

export const commonKeywords = [
  { text: "delivery", weight: 45 }, { text: "support", weight: 38 }, { text: "update", weight: 35 },
  { text: "pricing", weight: 32 }, { text: "fast", weight: 30 }, { text: "crash", weight: 28 },
  { text: "refund", weight: 26 }, { text: "easy", weight: 24 }, { text: "bug", weight: 22 },
  { text: "amazing", weight: 20 }, { text: "slow", weight: 18 }, { text: "love", weight: 16 },
  { text: "frustrating", weight: 15 }, { text: "intuitive", weight: 14 }, { text: "broken", weight: 12 },
];
