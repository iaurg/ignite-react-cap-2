import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  
  const { transactions } = useContext(TransactionsContext)
  
  console.log(transactions)

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income Icon" />
        </header>
        <strong>
          R$1000
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Income Icon" />
        </header>
        <strong>
          - R$500
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Income Icon" />
        </header>
        <strong>
          R$1000
        </strong>
      </div>
    </Container>
  )
}
