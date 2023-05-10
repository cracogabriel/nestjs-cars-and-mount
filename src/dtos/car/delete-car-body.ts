import { IsNotEmpty } from 'class-validator'

export class DeleteCarBody {
  @IsNotEmpty({ message: 'Para deletar um carro, o id é necessário!' })
  id: string
}
