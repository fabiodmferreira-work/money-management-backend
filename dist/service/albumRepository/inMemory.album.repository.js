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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const albums_json_1 = __importDefault(require("./seed/albums.json"));
const photos_json_1 = __importDefault(require("./seed/photos.json"));
const ErrorTypes_1 = __importDefault(require("src/infra/error/ErrorTypes"));
let InMemoryAlbumRepository = class InMemoryAlbumRepository {
    constructor() {
        this.albums = albums_json_1.default;
        this.photos = photos_json_1.default;
    }
    list() {
        return Promise.resolve(this.albums);
    }
    listPhotosByAlbum(albumId) {
        const album = this.photos.find(album => album.albumId === albumId);
        if (!album) {
            throw new ErrorTypes_1.default.NotFound("Album", albumId);
        }
        return Promise.resolve(album.photos);
    }
    listPhotosGroupedByAlbum() {
        return Promise.resolve(photos_json_1.default);
    }
};
InMemoryAlbumRepository = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], InMemoryAlbumRepository);
exports.InMemoryAlbumRepository = InMemoryAlbumRepository;
//# sourceMappingURL=inMemory.album.repository.js.map