import {
  Body,
  HttpStatus,
  Post,
  Get,
  Res,
  Controller,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateArticleDTO } from '../dto/create-article.dto';
import { ArticleService } from '../service/article.service';
import { UpdatedArticleDTO } from '../dto/updated-article.dto';
import { PracticeMethodDTO } from '../dto/updated-methods-article.dto';

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
    return await this.articleService.CreateArticle(createArticleDto);
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
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been searched!',
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error searching the articles',
        error: `Bad Request: Cant find articles ${err}`,
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

  @Delete('delete/:id')
  async deleteArticle(@Res() response, @Param('id') id: string) {
    try {
      const article = this.articleService.deleteArticleById(id);
      return response.status(HttpStatus.OK).json({
        message: `Article has successfully been deleted!`,
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: 'There was an error deleting the article',
        error: `Bad Request: Cant find article ${err}`,
      });
    }
  }

  @Patch('methods/update/:id')
  async updateSEMethods(
    @Res() response,
    @Param('id') id: string,
    @Body() updateSEMethod: PracticeMethodDTO,
  ) {
    try {
      const article = this.articleService.updateSEMethod(
        id,
        updateSEMethod.se_practice,
      );
      return response.status(HttpStatus.OK).json({
        message: `Article has successfully been updated by software engineering practice method!`,
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message:
          'There was an error updating the software engineering practice method',
        error: `Bad Request: Cant find se practice method ${err}`,
      });
    }
  }

  @Patch('update/:id')
  async updateArticle(
    @Res() response,
    @Param('id') id: string,
    @Body() updatedArticle: UpdatedArticleDTO,
  ) {
    try {
      const article = this.articleService.updateArticleApproval(
        id,
        updatedArticle.is_approved,
      );
      return response.status(HttpStatus.OK).json({
        message: `Article has successfully been filtered by software engineering practice method!`,
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message:
          'There was an error searching the software engineering practice method',
        error: `Bad Request: Cant find se practice method ${err}`,
      });
    }
  }

  @Get('methods/se_practice/:id')
  async getPracticeMethods(@Res() response, @Param('id') practice: string) {
    try {
      const article = await this.articleService.searchArticleByAll({
        se_practice: practice,
      });
      return response.status(HttpStatus.OK).json({
        message:
          'Article has successfully been filtered by software engineering practice method!',
        article,
      });
    } catch (err: any) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message:
          'There was an error searching the software engineering practice method',
        error: 'Bad Request: Cant find se practice method',
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

  @Get('methods/SE')
  async getAllMethods(@Res() response) {
    try {
      const methods = await this.articleService.getSEMethods();
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully obtained SE methods.',
        methods,
      });
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'There was an error searching the methods',
        error: 'Bad Request: Cant get the methods',
      });
    }
  }
}
