import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, Max} from 'class-validator';

export class CreateRestaurantDto {
    @IsString()
    @IsNotEmpty({ message: 'กรอกชื่อร้านอาหาร' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'กรอกประเภทอาหาร' })
    cuisine: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsNumber()
    @Min(0)
    @Max(5)
    @IsOptional()
    rating?: number;
    
}