import Nomics from "..";
import { fetchJSON } from "../utils/fetch";
import { objToUrlParams } from "../utils/url";

export interface IExchangeRatesHistoryOptions {
  currency: string;
  start: Date;
  end?: Date;
}

export interface IRawExchangeRatesHistory {
  timestamp: string;
  rate: string;
}

const CURRENCIES_SPARKLINE_PATH = '/v1/exchange-rates/history'

const exchangeRatesHistory = (
  key: string,
  options: IExchangeRatesHistoryOptions,
  fetchOptions?: RequestInit
): Promise<IRawExchangeRatesHistory[]> => {
  const {
    currency,
    start,
    end
  } = options;
  const objParams = {
    currency,
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

export default exchangeRatesHistory;
