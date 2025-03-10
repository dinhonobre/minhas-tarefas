import * as Enums from '../Utils/Enums/Tarefa'

class Tarefa {
  Titulo: string
  Prioridade: Enums.Prioridade
  Status: Enums.Status
  descricao: string
  id: number

  constructor(
    Titulo: string,
    Prioridade: Enums.Prioridade,
    Status: Enums.Status,
    descricao: string,
    id: number
  ) {
    this.Titulo = Titulo
    this.Prioridade = Prioridade
    this.Status = Status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
