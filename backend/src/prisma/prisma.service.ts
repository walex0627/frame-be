import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // Configuración del Pool de conexiones para PostgreSQL (Supabase)
    const pool = new Pool({ 
      connectionString: process.env.DATABASE_URL 
    });
    
    // Inicializamos el PrismaClient usando el adaptador oficial de pg
    const adapter = new PrismaPg(pool);
    
    super({ adapter });
  }

  async onModuleInit() {
    // Conexión automática al iniciar el módulo
    await this.$connect();
  }

  async onModuleDestroy() {
    // Cierre limpio de la conexión al apagar la aplicación
    await this.$disconnect();
  }
}