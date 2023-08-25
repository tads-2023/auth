import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { SessionDto } from './dtos/session.dto';
export declare class UsersService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    signIn(userDto: UserDto): Promise<SessionDto>;
    signUp(userDto: UserDto, filePath: string): Promise<User>;
    update(id: number, userDto: UserDto): Promise<User>;
    show(id: number): Promise<User>;
}
