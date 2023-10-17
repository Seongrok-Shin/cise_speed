import { IsNotEmpty, IsString } from 'class-validator';

export class PracticeMethodDTO {
  @IsString()
  @IsNotEmpty()
  readonly se_practice: string;
}
