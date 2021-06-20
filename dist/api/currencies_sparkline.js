"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var fetch_1 = require("../utils/fetch");
var url_1 = require("../utils/url");
var CURRENCIES_SPARKLINE_PATH = 'v1/currencies/sparkline';
var currenciesSparkline = function (key, options, fetchOptions) {
    var convert = options.convert, ids = options.ids, start = options.start, end = options.end;
    var objParams = {
        convert: convert,
        ids: ids && ids.join(","),
        start: start.toISOString(),
        end: end ? end.toISOString() : new Date().toISOString(),
        key: key,
    };
    return fetch_1.fetchJSON("" + __1.default.NOMICS_API_BASE + CURRENCIES_SPARKLINE_PATH + "?" + url_1.objToUrlParams(objParams), fetchOptions);
};
exports.default = currenciesSparkline;
//# sourceMappingURL=currencies_sparkline.js.map