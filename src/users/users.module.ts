import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // เปิดให้โมดูลนี้เข้าถึงตาราง User ในฐานข้อมูลได้
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export เผื่อโมดูลอื่นเรียกใช้
})
export class UsersModule {}