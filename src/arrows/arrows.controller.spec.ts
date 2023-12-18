import { Test, TestingModule } from '@nestjs/testing';
import { ArrowsController } from './arrows.controller';

describe('ArrowsController', () => {
  let controller: ArrowsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArrowsController],
    }).compile();

    controller = module.get<ArrowsController>(ArrowsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
