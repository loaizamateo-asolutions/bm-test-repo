export interface IApiResponse<T> {
  $metadata: {
    market: string;
    timestamp: string;
    count: number;
  };
  data: T[];
}

export interface IPaginationOptions {
  page: number;
  limit: number;
}

export interface IMarketPrice {
  code: string;
  name: string;
  product: string;
  priceCategory: string;
  valueLow: number;
  valueHigh: number;
  valueMid: number;
  date: string;
  currency: string;
  unitOfMeasure: string;
}
