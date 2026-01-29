import { IsString, IsOptional, IsInt } from 'class-validator';

export class ForecastDto {
  @IsString()
  commodity: string;

  @IsOptional()
  @IsInt()
  year?: number;

  @IsOptional()
  @IsString()
  region?: string;
}
