import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from '../../controller/article.controller';
import { ArticleService } from '../../service/article.service';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, connect, Model } from 'mongoose';
import { Article, ArticleSchema } from '../../schema/article.schema';
import { getModelToken } from '@nestjs/mongoose';
import { ArticleDTOStub } from '../../stubs/article.stub';

describe('ArticleController', () => {
  let articleController: ArticleController;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let articleModel: Model<Article>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    articleModel = mongoConnection.model(Article.name, ArticleSchema);
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        ArticleService,
        { provide: getModelToken(Article.name), useValue: articleModel },
      ],
    }).compile();
    articleController = app.get<ArticleController>(ArticleController);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  describe('createArticle', () => {
    it('should return the saved object', async () => {
      const createdArticle = await articleController.createArticle(
        ArticleDTOStub(),
      );
      expect(createdArticle.title).toBe(ArticleDTOStub().title);
    });
  });
});
