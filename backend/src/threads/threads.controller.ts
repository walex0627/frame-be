import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ThreadsService } from './threads.service';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';

@ApiTags('Threads')
@Controller('threads')
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) { }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo hilo amarrado a un media' })
  create(@Body() createThreadDto: CreateThreadDto) {
    return this.threadsService.create(createThreadDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los hilos' })
  findAll() {
    return this.threadsService.findAll();
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un hilo existente' })
  update(@Param('id') id: string, @Body() updateThreadDto: UpdateThreadDto) {
    return this.threadsService.update(id, updateThreadDto);
  }

  @Get('media/:id')
  @ApiOperation({ summary: 'Obtener hilos de una película/serie específica' })
  findByMedia(@Param('id') id: string) {
    return this.threadsService.findByMedia(id);
  }
}