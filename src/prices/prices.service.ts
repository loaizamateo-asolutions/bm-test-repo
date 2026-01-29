import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { IMarketPrice, IApiResponse } from '../common/interfaces';
import { buildApiResponse } from '../common/api-response.helper';
import { PriceFiltersDto, PriceOptionsDto } from './prices.dto';

@Injectable()
export class PricesService {
  private readonly logger = new Logger(PricesService.name);

  async findPrices(
    market: string,
    filters?: PriceFiltersDto,
    options?: PriceOptionsDto,
  ): Promise<IApiResponse<IMarketPrice>> {
    try {
      this.logger.log(`Fetching prices for market: ${market}`);

      // In production, this queries the database
      const prices = await this.queryPrices(market, filters);

      return buildApiResponse(market, prices);
    } catch (error) {
      this.logger.error(`Failed to fetch prices for ${market}`, error.stack);
      throw new HttpException(
        'Failed to retrieve prices',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async queryPrices(
    market: string,
    filters?: PriceFiltersDto,
  ): Promise<IMarketPrice[]> {
    // Simulated database query
    return [
      {
        code: 'LI-0001',
        name: `${market} Sample Price`,
        product: 'Sample Product',
        priceCategory: 'Spot',
        valueLow: 10000,
        valueHigh: 12000,
        valueMid: 11000,
        date: '2024-12-15',
        currency: 'USD',
        unitOfMeasure: 'kg',
      },
    ];
  }
}
