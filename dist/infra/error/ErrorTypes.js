"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFound extends Error {
    constructor(resource, id) {
        if (!id) {
            super(`${resource} not found`);
        }
        else {
            super(`${resource} with id ${id} not found`);
        }
        this.name = "NotFound";
    }
}
exports.default = {
    NotFound
};
//# sourceMappingURL=ErrorTypes.js.map