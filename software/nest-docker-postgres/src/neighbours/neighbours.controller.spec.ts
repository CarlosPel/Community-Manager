import { Test, TestingModule } from '@nestjs/testing';
import { NeighboursController } from './neighbours.controller';

describe('NeighboursController', () => {
  let controller: NeighboursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeighboursController],
    }).compile();

    controller = module.get<NeighboursController>(NeighboursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
