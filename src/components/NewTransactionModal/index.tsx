import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title title="Informe descrição, preço e a categoria da transação ">
          Nova Transação
        </Dialog.Title>
        <CloseButton title="Fechar o modal">
          <X size={24} />
        </CloseButton>

        <form action="">
          <input
            type="text"
            placeholder="Descrição"
            title="Digite a descrição da transação"
            required
          />
          <input
            type="number"
            placeholder="Preço"
            title="Digite o preço da transação"
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            title="Digite a categoria da transação"
            required
          />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" title="Cadastrar uma transação">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
