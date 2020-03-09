"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_1 = require("inversify");
const types_1 = __importDefault(require("src/types"));
function albumControllerFactory(container) {
    let UserController = class UserController {
        constructor(albumRepository) {
            this.albumRepository = albumRepository;
        }
        findAlbums() {
            return this.albumRepository.list();
        }
        findPhotosGrouppedByAlbum() {
            return this.albumRepository.listPhotosGroupedByAlbum();
        }
        getAlbumPhotos(request) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.albumRepository.listPhotosByAlbum(+request.params.id);
            });
        }
    };
    __decorate([
        inversify_express_utils_1.httpGet("/", container.get(types_1.default.AuthorizationMiddleware)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "findAlbums", null);
    __decorate([
        inversify_express_utils_1.httpGet("/photos"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "findPhotosGrouppedByAlbum", null);
    __decorate([
        inversify_express_utils_1.httpGet("/:id/photos"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UserController.prototype, "getAlbumPhotos", null);
    UserController = __decorate([
        inversify_express_utils_1.controller("/api/albums"),
        __param(0, inversify_1.inject(types_1.default.AlbumRepository)),
        __metadata("design:paramtypes", [Object])
    ], UserController);
    return UserController;
}
exports.albumControllerFactory = albumControllerFactory;
//# sourceMappingURL=album.controller.js.map