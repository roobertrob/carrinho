import useStore from 'stores/useStore';
import { CounterProps } from 'types/Counter';
import { divClasses, liAmountClasses, liButtonClasses, ulClasses } from './styles';

export default function Counter({ product }: CounterProps) {

  const { products, incrementAmount, decrementAmount } = useStore();

  const index = products.indexOf(product);
  const filteredProduct = products[index];
  const amount = filteredProduct?.amount;

  return (
    <div className={divClasses}>
      <ul className={ulClasses}>
        <li className={""}>
          <button onClick={() => decrementAmount(product)}>-</button>
        </li>
        <li className="m-4">{amount}</li>
        <li>
          <button onClick={() => incrementAmount(product)}>+</button>
        </li>
      </ul>
    </div>
  );
}
