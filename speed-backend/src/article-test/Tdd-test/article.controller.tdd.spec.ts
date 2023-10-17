import { Test, TestingModule } from '@nestjs/testing';
import { ArticleController } from '../../controller/article.controller'; // Use relative path
import { ArticleService } from '../../service/article.service'; // Use relative path
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArticleSchema } from '../../schema/article.schema';
import { ArticleDTOStub } from '../../stubs/article.stub';

describe('Controller', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ envFilePath: './.env' }),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
      ],
      controllers: [ArticleController],
      providers: [ArticleService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  describe('TDD-GetAllArticles', () => {
    it('it should return all articles', async () => {
      let response: any = null;
      expect(response).toBe(null);
      response = await request(app.getHttpServer()).get('/article/all');
      expect(response).toBeDefined();
      expect(response.status).toBe(HttpStatus.OK);
    });
  });

  describe('TDD-CreateArticle', () => {
    it('should create a article without errors', async () => {
      let response: any = null;

      const emptyArticle: any = {};

      response = await request(app.getHttpServer())
        .post('/article/upload')
        .send(emptyArticle);
      expect(response.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);

      response = await request(app.getHttpServer())
        .post('/article/upload')
        .send(ArticleDTOStub());
      expect(response.status).toBe(HttpStatus.CREATED);
    });
  });

  describe('TDD-GetTitleArticle', () => {
    it('should return a searched article', async () => {
      let response: any = null;
      const emptyTitle: string = '';

      expect(response).toBe(null);

      response = await request(app.getHttpServer()).get(
        `/article/${emptyTitle}`,
      );

      expect(response).toBeDefined();
      expect(response.status).toBe(HttpStatus.NOT_FOUND);
      const mockTitle: string = 'SDP 2';
      response = await request(app.getHttpServer()).get(
        `/article/${mockTitle}`,
      );

      expect(response.status).toBe(HttpStatus.OK);
    });
  });
});
