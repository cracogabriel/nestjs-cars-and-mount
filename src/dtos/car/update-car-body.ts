import { IsNotEmpty } from 'class-validator'

export class UpdateCarBody {
  @IsNotEmpty({ message: 'O carro precisa ter um id para ser atualizado.' })
  id: string

  name?: string
  color?: string
  year?: number
}
