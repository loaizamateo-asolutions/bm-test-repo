import { Controller, Post, Body } from '@nestjs/common';
import { ForecastsService } from './forecasts.service';
import { ForecastDto } from './forecasts.dto';
import { formatApiResponse } from '../common/api-response.helper';

@Controller('forecasts')
export class ForecastsController {
  constructor(private forecastsService: ForecastsService) {}

  @Post()
  async getForecasts(@Body() filters: ForecastDto) {
    const data = await this.forecastsService.getForecasts(filters);
    return formatApiResponse(data, filters);
  }
}
