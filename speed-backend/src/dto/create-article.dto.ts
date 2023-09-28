import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateArticleDTO {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly author: string;
}
