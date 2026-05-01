import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClerkWebhookDto } from './dto/clerk-webhook.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('webhook')
  @HttpCode(HttpStatus.OK) // Clerk espera un 200 para confirmar recepción
  async clerkWebhook(@Body() body: ClerkWebhookDto) {
    const { type, data } = body;

    // Filtramos solo los eventos que nos interesan para Frame
    if (type === 'user.created' || type === 'user.updated') {
      return this.authService.handleClerkWebhook(data);
    }

    return { message: `Event ${type} received but not processed` };
  }
}