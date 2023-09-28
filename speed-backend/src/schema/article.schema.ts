import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubmitterDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authors: string[];

  @Prop({ required: false })
  journal: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: false })
  volume: number;

  @Prop({ required: true })
  pages: number;

  @Prop({ required: true })
  DOI: string;

  @Prop({ default: 'under_review' })
  status: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
