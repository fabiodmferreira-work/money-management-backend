"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = __importDefault(require("express-jwt"));
const jwks_rsa_1 = __importDefault(require("jwks-rsa"));
exports.checkJwt = express_jwt_1.default({
    secret: jwks_rsa_1.default.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://mmanagement.auth0.com/.well-known/jwks.json"
    }),
    // Validate the audience and the issuer.
    audience: "GPHRHIFx8IAyvvFHSQEHiCeVfElOwu99",
    issuer: "https://mmanagement.auth0.com/",
    algorithms: ["RS256"]
});
//# sourceMappingURL=authorization.js.map