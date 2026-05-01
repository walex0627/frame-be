import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClerkWebhookDto } from './dto/clerk-webhook.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async handleClerkWebhook(data: ClerkWebhookDto['data']) {
    const { id, email_addresses, username, image_url } = data;
    const email = email_addresses[0].email_address;

    return this.prisma.user.upsert({
      where: { clerkId: id },
      update: {
        username: username || email.split('@')[0],
        avatarUrl: image_url,
      },
      create: {
        id: crypto.randomUUID(), 
        clerkId: id,
        email: email,
        username: username || email.split('@')[0],
        avatarUrl: image_url,
      },
    });
  }
}
