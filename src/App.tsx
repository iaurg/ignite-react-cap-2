import { useState } from "react";
import { createServer, Model } from "miragejs"
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

// Acessibilidade do modal
Modal.setAppElement('#root')

createServer({
  models: {
    transaction: Model
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        this.schema.all('transaction')
      ]
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
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
