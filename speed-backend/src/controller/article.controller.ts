import { Body, HttpStatus, Post, Res, Controller } from '@nestjs/common';
import { CreateArticleDTO } from 'src/dto/create-article.dto';
import { ArticleService } from 'src/service/article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('upload')
  async createArticle(
    @Res() response,
    @Body() createArticleDto: CreateArticleDTO,
  ) {
    try {
      const newArticle =
        await this.articleService.CreateArticle(createArticleDto);

      return response.status(HttpStatus.CREATED).json({
        message: 'Article has successfully been created!',
        newArticle,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error uploading the article',
        error: 'Bad Request',
      });
    }
  }
}
