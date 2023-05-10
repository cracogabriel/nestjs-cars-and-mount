import { IsNotEmpty } from 'class-validator'

export class CreateCarBody {
  @IsNotEmpty({ message: 'O carro precisa ter um nome por padrão.' })
  name: string

  @IsNotEmpty({ message: 'O carro precisa ter uma cor por padrão.' })
  color: string

  @IsNotEmpty({ message: 'O carro precisa ter um ano por padrão.' })
  year: number
}
