import { Module } from '@nestjs/common';
import { ThingsService } from './things.service';
import { ThingsController } from './things.controller';

@Module({
  controllers: [ThingsController],
  providers: [ThingsService]
})
export class ThingsModule {}
