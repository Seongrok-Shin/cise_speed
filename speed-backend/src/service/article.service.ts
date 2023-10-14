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
  async getArticles() {
    const articles: any = await this.articleModel.find().exec();
    return articles.map((article: IArticle) => ({
      id: article._id,
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
      evidence: article.evidence,
      research: article.research,
      participant: article.participant,
      date: article.date,
      is_approved: {
        isModerator: article.is_approved.isModerator as boolean,
        isAnalyst: article.is_approved.isAnalyst as boolean,
        isModRejected: article.is_approved.isModRejected as boolean,
        isAnaRejected: article.is_approved.isAnaRejected as boolean,
      },
    }));
  }

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: returns one article
   * @param {any} anyValue:any
   * @returns {any} Article
   */
  async searchSingleArticle(anyValue: any) {
    const article = await this.findArticleAny(anyValue);
    return article;
  }

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: Searches Authors, publication year, claim and evidence results.
   * @param {any} evidence:Record<any
   * @param {any} any>
   * @returns {any}
   */
  async searchArticleByAll(all: Record<any, any>): Promise<IArticle[]> {
    try {
      const articles: any[] = await this.articleModel.find(all);
      if (this.isEmpty(articles)) {
        throw new NotFoundException(`Could not found ${all[0]}`);
      }
      return articles;
    } catch (err: any) {
      throw new NotFoundException(`Could not found ${all[0]}`);
    }
  }

  async deleteArticleById(id: string) {
    try {
      const article: any = await this.articleModel
        .deleteOne({ _id: id })
        .exec();
      return article;
    } catch (err: any) {
      throw new NotFoundException(`couldn't update the article ${err}`);
    }
  }

  async updateArticleApproval(id: string, updatedArticle: any) {
    try {
      const article: any = (await this.articleModel.findById(id)) as IArticle;
      if (updatedArticle) {
        article.is_approved = updatedArticle;
        article.save();
      }
    } catch (err: any) {
      throw new NotFoundException(`couldn't update the article ${err}`);
    }
  }

  async getSEMethods(): Promise<Array<string>> {
    try {
      const methods: Array<string> = [
        'Mob Programming',
        'Pair Programming',
        'Test Driven Development (TDD)',
        'Agile Software Development',
        'Continuous Integration (CI)',
      ];
      return methods;
    } catch (err: any) {
      throw new NotFoundException(`couldn't get the SE methods ${err}`);
    }
  }

  /**
   * @author @dgw7626 Hanul Rheem
   * @description: finds the specific article with the keyword.
   * @param {any} anyValue:any
   * @returns {any} Article[]
   */
  private async findArticleAny(anyValue: any): Promise<IArticle[]> {
    let tempArticle: any[];
    try {
      tempArticle = await this.articleModel.find({
        $or: [
          { title: { $regex: new RegExp(anyValue, 'i') } },
          { authors: { $regex: new RegExp(anyValue, 'i') } },
          { journal: { $regex: new RegExp(anyValue, 'i') } },
          { DOI: { $regex: new RegExp(anyValue, 'i') } },
          { status: { $regex: new RegExp(anyValue, 'i') } },
          { claim: { $regex: new RegExp(anyValue, 'i') } },
          { research: { $regex: new RegExp(anyValue, 'i') } },
          { participant: { $regex: new RegExp(anyValue, 'i') } },
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
  private isEmpty(value: any) {
    return value && Object.keys(value).length === 0;
  }
}
