import { Module } from '@nestjs/common';
import { ThingsService } from './things.service';
import { ThingsController } from './things.controller';
import {PrismaService} from "../prisma/prisma.service";

@Module({
  controllers: [ThingsController],
  providers: [ThingsService, PrismaService]
})
export class ThingsModule {}
