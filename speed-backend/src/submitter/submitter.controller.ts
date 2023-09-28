import { Body, Controller, Post } from '@nestjs/common';

type Article = {
  message: string;
};

@Controller('submitter')
export class SubmitterController {
  @Post('upload')
  uploadArticle(@Body() data: Article): string {
    console.log(data);
    return 'server recieved response';
  }
}
