import { IsObject, IsNotEmpty } from 'class-validator';

export class UpdatedArticleDTO {
  @IsObject()
  @IsNotEmpty()
  readonly is_approved: {
    isModerator: boolean;
    isModRejected: boolean;
    isAnalyst: boolean;
    isAnaRejected: boolean;
  };
}
