"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
// import { ConsoleTransportOptions } from "winston/lib/winston/transports";
const options = {
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.simple())
        })
    ],
};
const logger = winston.createLogger(options);
exports.default = logger;
const expressWinstonOptions = {
    level: (req, res) => {
        let level = "";
        if (res.statusCode >= 100) {
            level = "info";
        }
        if (res.statusCode >= 400) {
            level = "warn";
        }
        if (res.statusCode >= 500) {
            level = "error";
        }
        // Ops is worried about hacking attempts so make Unauthorized and Forbidden critical
        if (res.statusCode == 401 || res.statusCode == 403) {
            level = "critical";
        }
        // No one should be using the old path, so always warn for those
        // if (req.path === "/v1" && level === "info") { level = "warn"; }
        return level;
    },
    transports: (() => {
        return [
            new winston.transports.Console({
                format: winston.format.combine(winston.format.colorize(), winston.format.simple())
            })
        ];
    })()
};
exports.expressLogger = expressWinston.logger(expressWinstonOptions);
exports.winstonStreamer = {
    write: (message) => logger.info(message)
};
//# sourceMappingURL=winstonLogger.js.map