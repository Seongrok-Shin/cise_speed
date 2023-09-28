import { Document } from 'mongoose';

export interface IArticle extends Document {
  readonly title: string;
  readonly authors: string[];
  readonly journal: string;
  readonly year: number;
  readonly volume: number;
  readonly pages: number;
  readonly DOI: string;
}
