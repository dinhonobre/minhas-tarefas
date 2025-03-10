import * as S from './style'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCards = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo ?? false}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCards
