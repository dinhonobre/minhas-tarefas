import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as Enums from '../../Utils/Enums/Tarefa'

type TarefaType = {
  Titulo: string
  Prioridade: Enums.Prioridade
  Status: Enums.Status
  descricao: string
  id: number
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      {
        Titulo: 'Estudar JS',
        Prioridade: Enums.Prioridade.IMPORTANTE,
        Status: Enums.Status.CONCLUIDA,
        descricao: '',
        id: 4
      },
      {
        Titulo: 'Estudar TS',
        Prioridade: Enums.Prioridade.IMPORTANTE,
        Status: Enums.Status.PENDENTE,
        descricao: 'Rever Aula 9',
        id: 5
      },
      {
        Titulo: 'Estudar React',
        Prioridade: Enums.Prioridade.NORMAL,
        Status: Enums.Status.CONCLUIDA,
        descricao: '',
        id: 1
      }
    ] as TarefaType[]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<TarefaType>) => {
      const index = state.itens.findIndex((t) => t.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
