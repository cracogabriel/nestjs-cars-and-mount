import { Module } from '@nestjs/common'
import { CarController } from './controllers/car.controller'
import { PrismaService } from './database/prisma.service'
import { CarRepository } from './repositories/car-repository'
import { PrismaCarRepository } from './repositories/prisma/prisma-car-repository'

@Module({
  imports: [],
  controllers: [CarController],
  providers: [PrismaService, { provide: CarRepository, useClass: PrismaCarRepository }],
})
export class AppModule {}
