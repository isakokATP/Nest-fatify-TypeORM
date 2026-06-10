import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'กรุณากรอกชื่อผู้ใช้งาน' })
  name: string;

  @IsEmail({}, { message: 'รูปแบบ Email ไม่ถูกต้อง' })
  @IsNotEmpty({ message: 'กรุณากรอก Email' })
  email: string;

  @IsString()
  @IsOptional()
  role?: string;
}