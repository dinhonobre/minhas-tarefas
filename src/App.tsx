import ListaDeTarefas from './Container/ListaDeTarefas'
import BarraLateral from './Container/BarraLateral'
import EstiloGlobal, { Container } from './styles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
