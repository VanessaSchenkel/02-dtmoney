import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionalModal } from "./components/NewTransactionModal";
import { useState } from 'react';

Modal.setAppElement('#root') //para acessibilidade

export function App() {
  const [isNewTransactionModalOpen, setIsNewTrasactionModelOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTrasactionModelOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTrasactionModelOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionalModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
