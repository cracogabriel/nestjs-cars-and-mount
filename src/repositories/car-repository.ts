import { ResponseCarBody } from 'src/dtos/car/response-car-body'
import { UpdateCarBody } from 'src/dtos/car/update-car-body'

export abstract class CarRepository {
  abstract getAll(): Promise<Array<ResponseCarBody>>
  abstract create(name: string, color: string, year: number): Promise<void>
  abstract update(id: string, data: UpdateCarBody): Promise<void>
  abstract delete(id: string): Promise<void>
}
