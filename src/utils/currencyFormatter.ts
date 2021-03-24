export function formatCurrency(value:number): string{
  const options = { style: 'currency', currency: 'BRL' }
  const formatted = new Intl.NumberFormat('pt-BR', options).format(value)
  return formatted
}