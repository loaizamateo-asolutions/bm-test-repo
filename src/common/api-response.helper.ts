import { IApiResponse } from './interfaces';

export function buildApiResponse<T>(
  market: string,
  data: T[],
): IApiResponse<T> {
  return {
    $metadata: {
      market,
      timestamp: new Date().toISOString(),
      count: data.length,
    },
    data,
  };
}
