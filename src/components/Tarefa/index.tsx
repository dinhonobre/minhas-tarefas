import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './style'
import * as Enums from '../../Utils/Enums/Tarefa'

import { remover, editar } from '../../store/Reducer/tarefas'
import TarefaClasse from '../../models/Tarefas'

type Props = TarefaClasse

const Tarefa = ({
  descricao: descricaoOriginal,
  Prioridade,
  Status,
  Titulo,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  const handleSalvar = () => {
    dispatch(
      editar({
        descricao,
        Prioridade,
        Status,
        Titulo,
        id
      })
    )
    setEstaEditando(false)
  }

  const handleCancelar = () => {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{Titulo}</S.Titulo>
      <S.Tag $Parametro="Prioridade" $Prioridade={Prioridade}>
        {Prioridade}
      </S.Tag>
      <S.Tag $Parametro="Status" $Status={Status}>
        {Status}
      </S.Tag>

      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcao>
        {estaEditando ? (
          <>
            <S.BotaoSalva onClick={handleSalvar}>Salvar</S.BotaoSalva>
            <S.BotaoCancelarRemover onClick={handleCancelar}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcao>
    </S.Card>
  )
}

export default Tarefa
