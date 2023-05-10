import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common'
import { CreateCarBody } from 'src/dtos/car/create-car-body.'
import { DeleteCarBody } from 'src/dtos/car/delete-car-body'
import { UpdateCarBody } from 'src/dtos/car/update-car-body'
import { CarRepository } from 'src/repositories/car-repository'

@Controller('cars')
export class CarController {
  constructor(private carRepository: CarRepository) {}

  @Get()
  async getAll() {
    return await this.carRepository.getAll()
  }

  @Post('add')
  async addCar(@Body() body: CreateCarBody) {
    const { name, color, year } = body

    await this.carRepository.create(name, color, year)
  }

  @Put('update')
  async updateCar(@Body() body: UpdateCarBody) {
    const { id } = body

    await this.carRepository.update(id, body)
  }

  @Delete('delete')
  async deleteCar(@Body() body: DeleteCarBody) {
    const { id } = body

    await this.carRepository.delete(id)
  }
}
