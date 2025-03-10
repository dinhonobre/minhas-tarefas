import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './Reducer/tarefas'
import filtroReducer from './Reducer/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})
export default store

export type RootState = ReturnType<typeof store.getState>
