
export interface Comment {
  text: string;
  author: string;
  platform: 'YouTube' | 'Reddit' | 'Web' | 'Facebook' | 'Messenger' | 'Vimeo' | 'LinkedIn' | 'X';
}

export interface FeedbackReport {
  sentimentScore: number;
  sentimentLabel: 'Positive' | 'Negative' | 'Neutral';
  summary: string;
  pros: string[];
  cons: string[];
  verdict: string;
  topComments: Comment[];
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface AnalysisResult {
  report: FeedbackReport;
  sources: GroundingSource[];
}
