import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThingsModule } from './things/things.module';

@Module({
  imports: [ThingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
