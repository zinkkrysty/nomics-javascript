import Nomics from "..";
import { fetchJSON } from "../utils/fetch";
import { objToUrlParams } from "../utils/url";

export interface ICurrenciesSparklineOptions {
  ids?: string[];
  convert?: string;
  start: Date;
  end?: Date;
}

export interface IRawCurrencySparkline {
  currency: string;
  timestamps: string[];
  prices: string[];
}

const CURRENCIES_SPARKLINE_PATH = '/v1/currencies/sparkline'

const currenciesSparkline = (
  key: string,
  options: ICurrenciesSparklineOptions,
  fetchOptions?: RequestInit
): Promise<IRawCurrencySparkline[]> => {
  const {
    convert,
    ids,
    start,
    end
  } = options;
  const objParams = {
    convert,
    ids: ids && ids.join(","),
    start: start.toISOString(),
    end: end ? end.toISOString() : new Date().toISOString(),
    key,
  };

  return fetchJSON(
    `${Nomics.NOMICS_API_BASE}${CURRENCIES_SPARKLINE_PATH}?${objToUrlParams(
      objParams
    )}`,
    fetchOptions
  );
};

export default currenciesSparkline;
