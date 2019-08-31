import { Test, TestingModule } from '@nestjs/testing';
import { WallController } from './wall.controller';

describe('Wall Controller', () => {
  let controller: WallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WallController],
    }).compile();

    controller = module.get<WallController>(WallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
