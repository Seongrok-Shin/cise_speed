import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubmitterDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authors: string[];

  @Prop({ required: true })
  journal: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  volume: number;

  @Prop({ required: true })
  pages: number;

  @Prop({ required: true })
  DOI: string;

  @Prop({ default: 'under_review' })
  status: string;

  @Prop({ required: true })
  claim: string;

  @Prop({ required: true })
  result: boolean;

  @Prop({ required: true })
  evidence: string;

  @Prop({ required: true })
  research: string;

  @Prop({ required: true })
  participant: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
