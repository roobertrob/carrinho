import useStore from 'stores/useStore';
import { CounterProps } from 'types/Counter';
import { liAmountClasses, liButtonClasses, ulClasses } from './styles';

export default function Counter({ product }: CounterProps) {

  const { products, incrementAmount, decrementAmount } = useStore();

  const index = products.indexOf(product);
  const filteredProduct = products[index];
  const amount = filteredProduct?.amount;

  return (
    <ul className={ulClasses}>
      <li className={liAmountClasses}>{amount}</li>
      <li className={liButtonClasses}>
        <button onClick={() => decrementAmount(product)}>
          -
        </button>
      </li>
      <li>
        <button onClick={() => incrementAmount(product)}>+</button>
      </li>
    </ul>
  );
}
