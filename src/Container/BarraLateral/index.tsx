import { useDispatch, useSelector } from 'react-redux'
import FiltroCards from '../../components/FiltroCards'
import * as S from './styles'
import { RootState } from '../../store'
import { alteraTermo } from '../../store/Reducer/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const termo = useSelector((state: RootState) => state.filtro.termo)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.Filtro>
          <FiltroCards legenda="Pendentes" contador={1} />
          <FiltroCards legenda="Concluídas" contador={2} />
          <FiltroCards legenda="Urgentes" contador={3} />
          <FiltroCards legenda="Importantes" contador={4} />
          <FiltroCards legenda="Normal" contador={5} />
          <FiltroCards legenda="Todas" contador={10} ativo />
        </S.Filtro>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
