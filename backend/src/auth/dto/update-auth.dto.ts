import { IsString, IsOptional, MaxLength } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    username?: string;

    @IsString()
    @IsOptional()
    @MaxLength(160)
    bio?: string;

    @IsString()
    @IsOptional()
    avatarUrl?: string;
}