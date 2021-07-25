export interface IExchangeRatesHistoryOptions {
    currency: string;
    start: Date;
    end?: Date;
}
export interface IRawExchangeRatesHistory {
    timestamp: string;
    rate: string;
}
declare const exchangeRatesHistory: (key: string, options: IExchangeRatesHistoryOptions, fetchOptions?: RequestInit | undefined) => Promise<IRawExchangeRatesHistory[]>;
export default exchangeRatesHistory;
