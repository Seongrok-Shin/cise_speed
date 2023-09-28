import { Test, TestingModule } from '@nestjs/testing';
import { SubmitterController } from './submitter.controller';

describe('SubmitterController', () => {
  let controller: SubmitterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubmitterController],
    }).compile();

    controller = module.get<SubmitterController>(SubmitterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
