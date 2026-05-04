import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, IsOptional, IsInt, IsEnum } from 'class-validator';
import { MediaType } from '@prisma/client';

export class CreateThreadDto {
  @ApiProperty({ description: 'Contenido del hilo', maxLength: 500 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  content: string;

  @ApiProperty({ description: 'ID de la película o serie (TMDB ID, etc.)' })
  @IsString()
  @IsNotEmpty()
  mediaId: string;

  @ApiProperty({ enum: MediaType, description: 'Tipo de contenido' })
  @IsEnum(MediaType)
  mediaType: MediaType;

  @ApiPropertyOptional({ description: 'Temporada (si aplica)' })
  @IsInt()
  @IsOptional()
  season?: number;

  @ApiPropertyOptional({ description: 'Episodio (si aplica)' })
  @IsInt()
  @IsOptional()
  episode?: number;

  @ApiProperty({ description: 'Momento exacto del video', example: '01:22:15' })
  @IsString()
  @IsNotEmpty()
  timestamp: string;

  @ApiProperty({ description: 'ID del usuario creador (temporal)' })
  @IsString()
  @IsNotEmpty()
  authorId: string;
}