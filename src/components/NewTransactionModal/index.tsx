import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { TransactionsContext } from '../../TransactionsContext'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

type NewTransactionModalProps = {
  isModalOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isModalOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()

    const transaction = { type, title, category, amount }
    await createTransaction(transaction)

    setTitle('')
    setType('deposit')
    setAmount(0)
    setCategory('')

    onRequestClose()
  }

  return (    
    <Modal 
    isOpen={isModalOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button type="button" onClick={onRequestClose} className="react-modal-close"> 
      <img src={closeImg} alt="Close Modal" />
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transação</h2>

      <input 
        type="text"
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Título"
      />
      <input 
        type="number"       
        value={amount} 
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Valor"
      />
      <TransactionTypeContainer>
        <RadioBox 
          type="button"
          onClick={() => setType('deposit')} 
          isActive={type === 'deposit'}
          activeColor='green'
        >
          <img src={incomeImg} alt="Income button" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox 
          type="button"
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor='red'
        >
          <img src={outcomeImg} alt="Outcome button" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Categoria"
      />
      <button type="submit">
        Cadastrar
      </button>
    </Container>
  </Modal>
  )
}
