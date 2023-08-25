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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const http_1 = require("@nestjs/common/decorators/http");
const user_dto_1 = require("./dtos/user.dto");
const users_service_1 = require("./users.service");
const sessio_guard_1 = require("./sessio.guard");
const http_2 = require("@nestjs/common/decorators/http");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const upload_service_1 = require("./upload.service");
let UsersController = exports.UsersController = class UsersController {
    constructor(userService, uploadService) {
        this.userService = userService;
        this.uploadService = uploadService;
    }
    show(req) {
        console.log(req.user);
        return this.userService.show(req.user.id);
    }
    update(id, updateUser) {
        return this.userService.update(id, updateUser);
    }
    async create(createUser, file) {
        let filePath = '';
        if (file) {
            filePath = await this.uploadService.uploadFile(file);
        }
        return this.userService.signUp(createUser, filePath);
    }
    login(signInUser) {
        return this.userService.signIn(signInUser);
    }
};
__decorate([
    (0, common_1.UseGuards)(sessio_guard_1.SessionGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, http_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "show", null);
__decorate([
    (0, common_1.UseGuards)(sessio_guard_1.SessionGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, http_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('sign-up'),
    (0, common_2.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, http_2.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('sign-in'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        upload_service_1.UploadService])
], UsersController);
//# sourceMappingURL=users.controller.js.map