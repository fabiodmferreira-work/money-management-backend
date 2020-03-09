"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorTypes_1 = __importDefault(require("./ErrorTypes"));
const winstonLogger_1 = __importDefault(require("../log/winstonLogger"));
exports.default = (app) => app.use((err, req, res, next) => {
    if (err instanceof ErrorTypes_1.default.NotFound) {
        winstonLogger_1.default.warn(err.stack);
        return res.status(404).send(err.message);
    }
    winstonLogger_1.default.error(err.stack);
    next(err);
});
//# sourceMappingURL=expressErrorMiddleware.js.map