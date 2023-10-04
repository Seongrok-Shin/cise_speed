import { Body, HttpStatus, Post, Get, Res, Controller, Param } from '@nestjs/common';
import { CreateArticleDTO } from '../dto/create-article.dto';
import { ArticleService } from '../service/article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: creates new article.
   * @param {any} 'upload'
   * @returns {any}: void
   */
  @Post('upload')
  async createArticle(
    @Res() response,
    @Body() createArticleDto: CreateArticleDTO,
  ) {
    try {
      const newArticle =
        await this.articleService.CreateArticle(createArticleDto);

      console.log(newArticle);

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

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: returns all relavent articles.
   * @param {any} 'all'
   * @returns {any} Article[]
   */
  @Get('all')
  async getArticles(@Res() response){
    try{
      const article = await this.articleService.getArticles();
      console.log(article);
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been searched!',
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error searching the articles',
        error: 'Bad Request: Cant find articles',
      });
    }
  }
  
  /**
   * @author @dgw7626 Hanul Rheem
   * @description: returns with signle article with keyword.
   * @param {any} ':id'
   * @returns {any} Article
   */
  @Get(':id')
  async getSingleArticle(@Res() response, @Param('id') title: string) {
    try{
      const article = await this.articleService.searchSingleArticle(title);
      console.log(article);
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been searched!',
        article,
      })
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400, 
        message: 'There was an error searching the article',
        error: 'Bad Request: Cant find article',
      });
    }
  }
}
