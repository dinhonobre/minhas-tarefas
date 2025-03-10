import { useSelector, UseSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './style'
import * as Enums from '../../Utils/Enums/Tarefa'
import { RootState } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootState) => state.tarefas)
  const { termo } = useSelector((state: RootState) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (iten) => iten.Titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 Tarefas Marcadas: &quot;categorias&quot; e &quot;{termo}&quot;</p>
      <ul>
        {filtraTarefas().map((T) => (
          <li key={T.Titulo}>
            <Tarefa
              id={T.id}
              Titulo={T.Titulo}
              descricao={T.descricao}
              Prioridade={T.Prioridade}
              Status={T.Status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
export default ListaDeTarefas
