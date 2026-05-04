import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ClerkWebhookDto } from './dto/clerk-webhook.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Sincronizar usuarios desde Clerk' })
  @ApiResponse({ status: 200, description: 'Usuario sincronizado correctamente.' })
  @ApiResponse({ status: 400, description: 'Payload de webhook inválido.' })
  async clerkWebhook(@Body() body: ClerkWebhookDto) {
    const { type, data } = body;

    if (type === 'user.created' || type === 'user.updated') {
      return this.authService.handleClerkWebhook(data);
    }

    return { message: `Event ${type} received but not processed` };
  }
}