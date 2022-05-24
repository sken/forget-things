import { Test, TestingModule } from '@nestjs/testing';
import { ThingsController } from './things.controller';
import { ThingsService } from './things.service';

describe('ThingsController', () => {
  let controller: ThingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThingsController],
      providers: [ThingsService],
    }).compile();

    controller = module.get<ThingsController>(ThingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
