import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArticleDTO } from '@dto/create-article.dto';
import { IArticle } from '@articleInterface';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private articleModel: Model<IArticle>) {}


  /**
   * @author Logan Wood
   * @description Description: creates new article with inputs.
   * @param {any} CreateArticleDto:CreateArticleDTO
   * @returns {any}: void
   */
  async CreateArticle(CreateArticleDto: CreateArticleDTO): Promise<IArticle> {
    const newArticle = new this.articleModel(CreateArticleDto);
    return newArticle.save();
  }

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: returns all available articles
   * @returns {any} Aritcle[]
   */
  async getArticles(){
    const articles = await this.articleModel.find().exec();
    return articles.map((article: IArticle) => ({
      title: article.title,
      authors: article.authors,
      journal: article.journal,
      year: article.year,
      volume: article.volume,
      pages: article.pages,
      DOI: article.DOI,
      status: article.status,
      claim: article.claim,
      result: article.result,
      research: article.research,
      participant: article.participant
        }));
  }

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: returns one article
   * @param {any} anyValue:any
   * @returns {any} Article
   */
  async searchSingleArticle(anyValue: any ){
    const article = await this.findArticleAny(anyValue);
    return article;
  }

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: finds the specific article with the keyword.
   * @param {any} anyValue:any
   * @returns {any} Article[]
   */
  private async findArticleAny(anyValue: any ): Promise<IArticle[]> {
    let tempArticle: any[];
    try{
      tempArticle = await this.articleModel.find({
        $or: [
          { title: anyValue },
          { authors: anyValue },
          { journal: anyValue },
          { DOI: anyValue },
          { status: anyValue },
          { claim: anyValue },
          { research: anyValue },
          { participant: anyValue },
        ],
      });
    } catch (err: any) {
      throw new NotFoundException('Could not find article');
    }
    if (this.isEmpty(tempArticle)) {
      throw new NotFoundException('Could not found article');
    }
    return tempArticle;
  }

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: check if the object is null or empty.
   * @param {any} value:any
   * @returns {any} : void
   */
  private isEmpty(value: any){
    return value && Object.keys(value).length === 0;
  }
}
