import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="imagem verde de bola com flecha virada para cima" />
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="imagem vermelha de bola com flecha virada para baixo" />
                </header>
                <strong>-R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="imagem branca de símbolo do dinheiro" />
                </header>
                <strong>R$500</strong>
            </div>

        </Container>
    )
}