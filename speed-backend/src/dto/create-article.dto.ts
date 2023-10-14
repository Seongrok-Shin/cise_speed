import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsArray,
  IsNumber,
  IsBoolean,
  IsObject,
} from 'class-validator';

export class CreateArticleDTO {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsNotEmpty()
  readonly authors: string[];

  @IsString()
  @MaxLength(30)
  readonly journal: string;

  @IsNumber()
  @IsNotEmpty()
  readonly year: number;

  @IsNumber()
  readonly volume: number;

  @IsNumber()
  @IsNotEmpty()
  readonly pages: number;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly DOI: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly claim: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly evidence: string;

  @IsBoolean()
  @IsNotEmpty()
  readonly result: boolean;

  @IsString()
  @MaxLength(255)
  readonly research: string;

  @IsString()
  @MaxLength(255)
  readonly participant: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly se_practice: string;

  @IsObject()
  @IsNotEmpty()
  readonly is_approved: {
    isModerator: boolean;
    isModRejected: boolean;
    isAnalyst: boolean;
    isAnaRejected: boolean;
  };

  @IsString()
  @IsNotEmpty()
  readonly date: string;
}
