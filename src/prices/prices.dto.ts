import { IsOptional, IsString, IsArray, IsDateString, IsBoolean } from 'class-validator';

export class PriceFiltersDto {
  @IsOptional()
  @IsDateString()
  dateFrom?: string;

  @IsOptional()
  @IsDateString()
  dateTo?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  products?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  codes?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  countries?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  regions?: string[];
}

export class PriceOptionsDto {
  @IsOptional()
  @IsBoolean()
  includeSeries?: boolean;

  @IsOptional()
  @IsBoolean()
  includeSummary?: boolean;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  unitOfMeasure?: string;
}

export class FindPricesDto {
  @IsOptional()
  filters?: PriceFiltersDto;

  @IsOptional()
  options?: PriceOptionsDto;
}
