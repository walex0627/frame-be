import { IsString, IsOptional, MaxLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiPropertyOptional({ description: 'Nombre de usuario único', example: 'walter_gomez' })
    @IsString()
    @IsOptional()
    username?: string;

    @ApiPropertyOptional({ description: 'Biografía corta del usuario', example: 'Apaixonado por cinema e anime' })
    @IsString()
    @IsOptional()
    @MaxLength(160)
    bio?: string;

    @ApiPropertyOptional({ description: 'URL de la foto de perfil', example: 'https://example.com/avatar.jpg' })
    @IsString()
    @IsOptional()
    avatarUrl?: string;
}