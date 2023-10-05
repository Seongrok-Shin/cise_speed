import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArticleDTO } from 'src/dto/create-article.dto';
import { IArticle } from 'src/interface/article.interface';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private articleModel: Model<IArticle>) {}

  async CreateArticle(createArticleDto: CreateArticleDTO): Promise<IArticle> {
    const newArticle = new this.articleModel(createArticleDto);
    return newArticle.save();
  }
}
