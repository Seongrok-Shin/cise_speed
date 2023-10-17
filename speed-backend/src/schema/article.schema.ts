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

  @Prop({ required: true, default: '', type: String })
  se_practice: string;

  @Prop({
    required: true,
    type: Object,
    default: {
      isModerator: false,
      isAnalyst: false,
      isModRejected: false,
      isAnaRejected: false,
    },
  })
  is_approved: {
    isModerator: boolean;
    isModRejected: boolean;
    isAnalyst: boolean;
    isAnaRejected: boolean;
  };

  @Prop({ required: true, default: '', type: String })
  date: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
