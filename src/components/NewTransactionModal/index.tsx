import Modal from 'react-modal'

type NewTransactionModalProps = {
  isModalOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isModalOpen, onRequestClose}:NewTransactionModalProps) {
  return (    
    <Modal 
    isOpen={isModalOpen} 
    onRequestClose={onRequestClose}
  >
    <h2>Cadastrar transação</h2>
  </Modal>
  )
}
