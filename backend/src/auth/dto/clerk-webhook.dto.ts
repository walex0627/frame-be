import { IsString, IsEmail, IsOptional, IsObject, IsArray } from 'class-validator';

export class ClerkWebhookDto {
    @IsObject()
    data: {
        id: string;
        email_addresses: Array<{
            email_address: string;
        }>;
        username: string | null;
        image_url: string;
    };

    @IsString()
    type: string;
}