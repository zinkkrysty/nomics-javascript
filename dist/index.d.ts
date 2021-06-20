import { CurrencyTickerInterval, ICurrenciesTickerOptions, IRawCurrencyTicker } from "./api/currencies_ticker";
import { ExchangeMarketTickerInterval, IExchangeMarketsTickerOptions, IRawExchangeMarketTicker } from "./api/exchange_markets_ticker";
import { ExchangeTickerInterval, IExchangesTickerOptions, IRawExchangeTicker } from "./api/exchanges_ticker";
import { IntervalEnum } from "./constants";
import { ICurrenciesSparklineOptions } from "./api/currencies_sparkline";
export { IRawCurrencyTicker, IRawExchangeTicker, IRawExchangeMarketTicker, CurrencyTickerInterval, ExchangeTickerInterval, ExchangeMarketTickerInterval };
export { IntervalEnum };
export interface INomics {
    currencies: (options: ICurrenciesTickerOptions) => Promise<IRawCurrencyTicker[]>;
}
export interface INomicsOptions {
    apiKey: string;
    version?: number;
}
declare class Nomics {
    static set NOMICS_API_BASE(apiBase: string);
    static get NOMICS_API_BASE(): string;
    private static baseUrl;
    private apiKey;
    private version;
    constructor(options: INomicsOptions);
    currenciesTicker(options?: ICurrenciesTickerOptions, fetchOptions?: RequestInit): Promise<IRawCurrencyTicker[]>;
    currenciesSparkline(options: ICurrenciesSparklineOptions, fetchOptions?: RequestInit): Promise<import("./api/currencies_sparkline").IRawCurrencySparkline[]>;
    exchangesTicker(options?: IExchangesTickerOptions, fetchOptions?: RequestInit): Promise<IRawExchangeTicker[]>;
    exchangeMarketsTicker(options?: IExchangeMarketsTickerOptions, fetchOptions?: RequestInit): Promise<IRawExchangeMarketTicker[]>;
}
export default Nomics;
