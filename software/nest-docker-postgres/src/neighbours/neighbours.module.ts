import { Module } from '@nestjs/common';
import { NeighboursController } from './neighbours.controller';
import { NeighboursService } from './neighbours.service';

@Module({
  controllers: [NeighboursController],
  providers: [NeighboursService]
})
export class NeighboursModule {}
