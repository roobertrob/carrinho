import { Product } from 'types/Product';

export default function Format(Valor: Product["valor"]) {
  return (new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Valor));
}
