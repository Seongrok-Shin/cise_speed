import { Document } from 'mongoose';

export interface IArticle extends Document {
  readonly title: string;
  readonly authors: string[];
  readonly journal: string;
  readonly year: number;
  readonly volume: number;
  readonly pages: number;
  readonly DOI: string;
  readonly status: string;
  readonly claim: string;
  readonly result: boolean;
  readonly evidence: string;
  readonly research: string;
  readonly participant: string;
  readonly se_practice: string;
  is_approved: {
    isModerator: boolean;
    isModRejected: boolean;
    isAnalyst: boolean;
    isAnaRejected: boolean;
  };
  readonly date: string;
}
