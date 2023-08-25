/// <reference types="multer" />
import { SessionDto } from './dtos/session.dto';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UploadService } from './upload.service';
export declare class UsersController {
    private readonly userService;
    private readonly uploadService;
    constructor(userService: UsersService, uploadService: UploadService);
    show(req: any): Promise<User>;
    update(id: number, updateUser: UserDto): Promise<User>;
    create(createUser: UserDto, file: Express.Multer.File): Promise<User>;
    login(signInUser: UserDto): Promise<SessionDto>;
}
