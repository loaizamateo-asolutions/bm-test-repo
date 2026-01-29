import { Test, TestingModule } from '@nestjs/testing';
import { PricesService } from './prices.service';

describe('PricesService', () => {
  let service: PricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricesService],
    }).compile();

    service = module.get<PricesService>(PricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return prices with correct metadata', async () => {
    const result = await service.findPrices('Lithium');
    expect(result.$metadata.market).toBe('Lithium');
    expect(result.data).toBeInstanceOf(Array);
    expect(result.data.length).toBeGreaterThan(0);
  });

  it('should return prices with correct structure', async () => {
    const result = await service.findPrices('Cobalt');
    const price = result.data[0];
    expect(price).toHaveProperty('code');
    expect(price).toHaveProperty('valueLow');
    expect(price).toHaveProperty('valueHigh');
    expect(price).toHaveProperty('valueMid');
    expect(price).toHaveProperty('currency');
  });
});
