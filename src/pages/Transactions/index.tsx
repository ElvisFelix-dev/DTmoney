import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td>Burg King</td>
              <td>
                <PriceHighLight variant="outcome"> - R$ 58,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/02/2023</td>
            </tr>

            <tr>
              <td>Condominio</td>
              <td>
                <PriceHighLight variant="outcome"> - R$ 200,00</PriceHighLight>
              </td>
              <td>Moradia</td>
              <td>10/02/2023</td>
            </tr>

            <tr>
              <td>Internet</td>
              <td>
                <PriceHighLight variant="outcome"> - R$ 90,00</PriceHighLight>
              </td>
              <td>Contas</td>
              <td>10/02/2023</td>
            </tr>

            <tr>
              <td>Aluguel da plataforma</td>
              <td>
                <PriceHighLight variant="income">R$ 100,00</PriceHighLight>
              </td>
              <td>Trabalhos</td>
              <td>10/02/2023</td>
            </tr>

            <tr>
              <td>Notebook</td>
              <td>
                <PriceHighLight variant="outcome"> - R$ 200,00</PriceHighLight>
              </td>
              <td>Acessorios</td>
              <td>10/02/2023</td>
            </tr>
            <tr>
              <td>Carro</td>
              <td>
                <PriceHighLight variant="income">R$ 10.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>10/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
      <Footer />
    </div>
  )
}
