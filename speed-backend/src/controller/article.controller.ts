import { Body, Post, Controller } from '@nestjs/common';
import { CreateArticleDTO } from '../dto/create-article.dto';
import { ArticleService } from '../service/article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('upload')
  async createArticle(@Body() createArticleDto: CreateArticleDTO) {
    return this.articleService.CreateArticle(createArticleDto);
  }
}
