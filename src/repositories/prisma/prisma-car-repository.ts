import { randomUUID } from 'node:crypto'
import { CarRepository } from '../car-repository'
import { PrismaService } from 'src/database/prisma.service'
import { Injectable } from '@nestjs/common'
import { ResponseCarBody } from 'src/dtos/car/response-car-body'
import { UpdateCarBody } from 'src/dtos/car/update-car-body'

@Injectable()
export class PrismaCarRepository implements CarRepository {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Array<ResponseCarBody>> {
    return await this.prisma.cars.findMany()
  }

  async delete(id: string): Promise<void> {
    await this.prisma.cars.delete({ where: { id: id } })
  }

  async update(id: string, data: UpdateCarBody): Promise<void> {
    await this.prisma.cars.update({ where: { id }, data })
  }

  async create(name: string, color: string, year: number): Promise<void> {
    await this.prisma.cars.create({
      data: {
        name,
        color,
        year,
        id: randomUUID(),
      },
    })
  }
}
