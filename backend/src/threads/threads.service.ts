import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';

@Injectable()
export class ThreadsService {
  constructor(private prisma: PrismaService) { }

  async create(createThreadDto: CreateThreadDto) {
    return this.prisma.thread.create({
      data: createThreadDto,
      include: {
        author: {
          select: { username: true, avatarUrl: true }
        }
      }
    });
  }

  async update(id: string, updateThreadDto: UpdateThreadDto) {
    return this.prisma.thread.update({
      where: { id },
      data: updateThreadDto,
      include: {
        author: {
          select: { username: true, avatarUrl: true }
        }
      }
    });
  }
  async findAll() {
    return this.prisma.thread.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: { username: true, avatarUrl: true }
        },
        _count: {
          select: { reactions: true }
        }
      }
    });
  }

  async findByMedia(mediaId: string) {
    return this.prisma.thread.findMany({
      where: { mediaId },
      include: {
        author: { select: { username: true, avatarUrl: true } }
      }
    });
  }
}