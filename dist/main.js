"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = require("./infra/authorization/authorization");
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const types_1 = __importDefault(require("./types"));
const inMemory_album_repository_1 = require("./service/albumRepository/inMemory.album.repository");
const addExpressMiddlewares_1 = __importDefault(require("./infra/addExpressMiddlewares"));
const expressErrorMiddleware_1 = __importDefault(require("./infra/error/expressErrorMiddleware"));
const album_controller_1 = require("./api/album/album.controller");
require("./api");
// load everything needed to the Container
const container = new inversify_1.Container();
container.bind(types_1.default.AlbumRepository).to(inMemory_album_repository_1.InMemoryAlbumRepository);
container.bind(types_1.default.AuthorizationMiddleware).toConstantValue(authorization_1.checkJwt);
album_controller_1.albumControllerFactory(container);
const server = new inversify_express_utils_1.InversifyExpressServer(container);
// start the server
const app = server
    .setConfig(addExpressMiddlewares_1.default)
    .setErrorConfig(expressErrorMiddleware_1.default)
    .build();
app.listen(app.get("port"), () => {
    console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
//# sourceMappingURL=main.js.map