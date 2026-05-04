import { IsString, IsEmail, IsOptional, IsObject, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClerkWebhookDto {
    @ApiProperty({
        description: 'Objeto de datos enviado por Clerk',
        example: { id: 'user_28f...', email_addresses: [{ email_address: 'test@test.com' }], username: 'alex_dev', image_url: '...' }
    })
    @IsObject()
    data: {
        id: string;
        email_addresses: Array<{
            email_address: string;
        }>;
        username: string | null;
        image_url: string;
    };

    @ApiProperty({
        description: 'Tipo de evento enviado por Clerk',
        example: 'user.created'
    })
    @IsString()
    type: string;
}