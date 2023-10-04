import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArticleDTO } from 'src/dto/create-article.dto';
import { IArticle } from 'src/interface/article.interface';
import { Model } from 'mongoose';
import { Article } from 'src/schema/article.schema';
import { Logger } from '@nestjs/common';
@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private articleModel: Model<IArticle>) {}

  async CreateArticle(CreateArticleDto: CreateArticleDTO): Promise<IArticle> {
    const newArticle = new this.articleModel(CreateArticleDto);
    return newArticle.save();
  }

  /**
   * @author @dgw7626
   * Description
   * @returns {any}
   */
  async GetArticles(){
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

  async SearchSingleArticle(anyValue: any ){
    const article = await this.FindArticleAny(anyValue);
    return article;
  }

  private async FindArticleAny(anyValue: any ): Promise<IArticle[]> {
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

  private isEmpty(value: any){
    return value && Object.keys(value).length === 0;
  }
}
