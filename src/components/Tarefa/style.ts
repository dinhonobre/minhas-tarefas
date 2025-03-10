import styled from 'styled-components'
import Variaveis from '../../styles/Variaveis'
import * as Enums from '../../Utils/Enums/Tarefa'

type TagProps = {
  $Prioridade?: Enums.Prioridade
  $Status?: Enums.Status
  $Parametro: 'Status' | 'Prioridade'
}

function retornaCorDeFundo({
  $Parametro,
  $Status,
  $Prioridade
}: TagProps): string {
  if ($Parametro === 'Status') {
    if ($Status === Enums.Status.PENDENTE) return Variaveis.amarelo
    if ($Status === Enums.Status.CONCLUIDA) return Variaveis.verde
  } else {
    if ($Prioridade === Enums.Prioridade.URGENTE) return Variaveis.vermalho
    if ($Prioridade === Enums.Prioridade.IMPORTANTE) return Variaveis.amarelo2
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  border-bottom: 16px;
`

// Usando props transientes com o prefixo $
export const Tag = styled.span<TagProps>`
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  font-size: 14px;
  line-height: 24px;
  color: #8b8b8b;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcao = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
`

export const Botao = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  font-size: 12px;
  background-color: #2f3640;
  cursor: pointer;
  margin-right: 8px;
`

export const BotaoSalva = styled(Botao)`
  background-color: ${Variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${Variaveis.vermalho};
`
