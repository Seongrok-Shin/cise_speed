import { Document } from 'mongoose';

export interface IArticle extends Document {
  readonly title: string;
  readonly author: string;
}
