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
declare const currenciesSparkline: (key: string, options: ICurrenciesSparklineOptions, fetchOptions?: RequestInit | undefined) => Promise<IRawCurrencySparkline[]>;
export default currenciesSparkline;
