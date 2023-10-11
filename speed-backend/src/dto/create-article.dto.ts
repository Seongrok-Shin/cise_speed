import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsArray,
  IsNumber,
  IsBoolean,
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

  @IsString()
  @MaxLength(255)
  readonly research: string;

  @IsString()
  @MaxLength(255)
  readonly participant: string;
}
