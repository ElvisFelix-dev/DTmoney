import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import imgLogo from '../../assets/imgLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={imgLogo} alt="Logo DTmoney" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
