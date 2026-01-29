import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PricesService } from './prices.service';
import { FindPricesDto } from './prices.dto';
import { ApiKeyGuard } from '../auth/api-key.guard';

@Controller('v3/prices')
@UseGuards(ApiKeyGuard)
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Post('lithium')
  async getLithiumPrices(@Body() body: FindPricesDto) {
    return this.pricesService.findPrices('Lithium', body.filters, body.options);
  }

  @Post('cobalt')
  async getCobaltPrices(@Body() body: FindPricesDto) {
    return this.pricesService.findPrices('Cobalt', body.filters, body.options);
  }

  @Post('nickel')
  async getNickelPrices(@Body() body: FindPricesDto) {
    return this.pricesService.findPrices('Nickel', body.filters, body.options);
  }
}
