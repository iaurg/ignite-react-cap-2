import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles'

type NewTransactionModalProps = {
  isModalOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isModalOpen, onRequestClose}:NewTransactionModalProps) {
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
    <Container>
      <h2>Cadastrar transação</h2>

      <input type="text" name="" id=""placeholder="Título"/>
      <input type="number" name="" id="" placeholder="Valor"/>
      <input type="text" name="" id="" placeholder="Categoria"/>
      <button type="submit">
        Cadastrar
      </button>
    </Container>
  </Modal>
  )
}
