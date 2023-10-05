import {
  Body,
  HttpStatus,
  Post,
  Get,
  Res,
  Controller,
  Param,
} from '@nestjs/common';
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
  async createArticle(@Body() createArticleDto: CreateArticleDTO) {
    return this.articleService.CreateArticle(createArticleDto);
  }

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: returns all relavent articles.
   * @param {any} 'all'
   * @returns {any} Article[]
   */
  @Get('all')
  async getArticles(@Res() response) {
    try {
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
    try {
      const article = await this.articleService.searchSingleArticle(title);
      console.log(article);
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been searched!',
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error searching the article',
        error: 'Bad Request: Cant find article',
      });
    }
  }

  @Get('author/:id')
  async getArticlesByAuthor(@Res() response, @Param('id') author: string) {
    try {
      const article = await this.articleService.searchArticleByAll({
        authors: author,
      });
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been filtered by author name!',
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error searching the author name',
        error: 'Bad Request: Cant find author',
      });
    }
  }

  @Get('year/:id')
  async getArticlesByYear(@Res() response, @Param('id') year: number) {
    try {
      const article = await this.articleService.searchArticleByAll({
        year: year,
      });
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been filtered by year!',
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error searching the year',
        error: 'Bad Request: Cant find year',
      });
    }
  }

  @Get('claim/:id')
  async getArticlesByClaim(@Res() response, @Param('id') claim: string) {
    try {
      const article = await this.articleService.searchArticleByAll({
        claim: claim,
      });
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been filtered by claim!',
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error searching the claim',
        error: 'Bad Request: Cant find claim',
      });
    }
  }

  @Get('evidence/:id')
  async getArticlesByEvidence(@Res() response, @Param('id') evidence: string) {
    try {
      const article = await this.articleService.searchArticleByAll({
        evidence: evidence,
      });
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been filtered by evidence!',
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error searching the evidence',
        error: 'Bad Request: Cant find evidence',
      });
    }
  }
}
