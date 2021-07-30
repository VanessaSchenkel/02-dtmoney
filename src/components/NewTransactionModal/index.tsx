import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionalModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="botão para fechar modal com opção de cadastrar transação" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Botão verde representando entrada de dinheiro" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Botão vermelho representando a saída de dinheiro" />
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal >
    )
}