"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression")); // compresses requests
const bodyParser = __importStar(require("body-parser"));
const lusca_1 = __importDefault(require("lusca"));
const express_flash_1 = __importDefault(require("express-flash"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const winstonLogger_1 = require("./log/winstonLogger");
exports.default = (app) => {
    app.set("port", process.env.PORT || 8000);
    app.use(cors_1.default());
    app.use(compression_1.default());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express_flash_1.default());
    app.use(lusca_1.default.xframe("SAMEORIGIN"));
    app.use(lusca_1.default.xssProtection(true));
    app.use(express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
    if (process.env.NODE_ENV !== "testing") {
        app.use(winstonLogger_1.expressLogger);
    }
};
//# sourceMappingURL=addExpressMiddlewares.js.map