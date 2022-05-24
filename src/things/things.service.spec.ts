import { Test, TestingModule } from '@nestjs/testing';
import { ThingsService } from './things.service';

describe('ThingsService', () => {
  let service: ThingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThingsService],
    }).compile();

    service = module.get<ThingsService>(ThingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
