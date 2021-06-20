"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var currencies_ticker_1 = __importDefault(require("./api/currencies_ticker"));
var exchange_markets_ticker_1 = __importDefault(require("./api/exchange_markets_ticker"));
var exchanges_ticker_1 = __importDefault(require("./api/exchanges_ticker"));
var constants_1 = require("./constants");
exports.IntervalEnum = constants_1.IntervalEnum;
var str_1 = require("./utils/str");
var currencies_sparkline_1 = __importDefault(require("./api/currencies_sparkline"));
var Nomics = /** @class */ (function () {
    function Nomics(options) {
        this.version = 1;
        var apiKey = options.apiKey, version = options.version;
        if (str_1.isEmpty(apiKey)) {
            throw new Error("Nomics API Key must be specified");
        }
        this.apiKey = apiKey;
        this.version = version ? version : this.version;
    }
    Object.defineProperty(Nomics, "NOMICS_API_BASE", {
        get: function () {
            return Nomics.baseUrl;
        },
        set: function (apiBase) {
            Nomics.baseUrl = apiBase;
        },
        enumerable: true,
        configurable: true
    });
    Nomics.prototype.currenciesTicker = function (options, fetchOptions) {
        return currencies_ticker_1.default(this.apiKey, options, fetchOptions);
    };
    Nomics.prototype.currenciesSparkline = function (options, fetchOptions) {
        return currencies_sparkline_1.default(this.apiKey, options, fetchOptions);
    };
    Nomics.prototype.exchangesTicker = function (options, fetchOptions) {
        return exchanges_ticker_1.default(this.apiKey, options, fetchOptions);
    };
    Nomics.prototype.exchangeMarketsTicker = function (options, fetchOptions) {
        return exchange_markets_ticker_1.default(this.apiKey, options, fetchOptions);
    };
    Nomics.baseUrl = constants_1.API_BASE;
    return Nomics;
}());
exports.default = Nomics;
//# sourceMappingURL=index.js.map