import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: "asdkljaskdjlaskljd",
      signOptions: { expiresIn: '180s' },
    })
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}