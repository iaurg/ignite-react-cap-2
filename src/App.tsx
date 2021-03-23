import { useState } from "react";
import { createServer } from "miragejs"
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

// Acessibilidade do modal
Modal.setAppElement('#root')

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          value: 1000
        }
      ]
    })
  }
})

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }
  
  return (
    <>
      <GlobalStyle />

      <Header onOpenNewTransactionModal={handleOpenModal} />
      
      <NewTransactionModal isModalOpen={isModalOpen} onRequestClose={handleCloseModal} />

      <Dashboard />
    </>
  );
}
