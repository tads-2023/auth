import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { Param, Request } from '@nestjs/common/decorators/http';
import { SessionDto } from './dtos/session.dto';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { SessionGuard } from './sessio.guard';
import { UploadedFile } from '@nestjs/common/decorators/http'
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly uploadService: UploadService
  ) {}
  
  @UseGuards(SessionGuard)
  @Get('me')
  show(
    @Request() req
  ): Promise<User> {
    console.log(req.user);
    return this.userService.show(req.user.id);
  }

  @UseGuards(SessionGuard)
  @Put(':id')
  update(
    @Param('id') id: number, 
    @Body() updateUser: UserDto
  ): Promise<User> {
    return this.userService.update(id, updateUser);
  }

  @Post('sign-up')
  @UseInterceptors(FileInterceptor('avatar'))
  async create(
    @Body() createUser: UserDto, 
    @UploadedFile() file: Express.Multer.File
  ): Promise<User> {
    let filePath = ''
    if(file) {
      filePath = await this.uploadService.uploadFile(file);
    }

    return this.userService.signUp(createUser, filePath);
  }

  @Post('sign-in')
  login(
    @Body() signInUser: UserDto
  ): Promise<SessionDto> {
    return this.userService.signIn(signInUser);
  }

}
