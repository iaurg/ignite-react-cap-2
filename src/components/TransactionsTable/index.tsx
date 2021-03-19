import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Item</td>
            <td>Item</td>
            <td>Item</td>
            <td>Item</td>
          </tr>

          <tr>
            <td>Item</td>
            <td>Item</td>
            <td>Item</td>
            <td>Item</td>
          </tr>

          <tr>
            <td>Item</td>
            <td>Item</td>
            <td>Item</td>
            <td>Item</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
