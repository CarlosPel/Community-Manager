import { Test, TestingModule } from '@nestjs/testing';
import { NeighboursService } from './neighbours.service';

describe('NeighboursService', () => {
  let service: NeighboursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeighboursService],
    }).compile();

    service = module.get<NeighboursService>(NeighboursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
