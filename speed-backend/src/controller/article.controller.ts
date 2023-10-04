import { Body, HttpStatus, Post, Get, Res, Controller, Param } from '@nestjs/common';
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

  @Get('all')
  async GetArticle(@Res() response){
    try{
      const article = await this.articleService.GetArticles();
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
  
  @Get(':id')
  async GetTitleArtilce(@Res() response, @Param('id') title: string) {
    try{
      const article = await this.articleService.SearchSingleArticle(title);
      console.log(article);
      return response.status(HttpStatus.OK).json({
        message: 'Article has successfully been searched!',
        article,
      })
    } catch(err: any){
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400, 
        message: 'There was an error searching the article',
        error: 'Bad Request: Cant find article',
      });
    }
  }
}
