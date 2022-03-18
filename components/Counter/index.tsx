import useStore from '../../stores/useStore';
import { CounterProps } from '../../types/Counter';

export default function Counter({ product }: CounterProps) {

  const { products, incrementAmount, decrementAmount } = useStore();

  const index = products.indexOf(product);
  const filteredProduct = products[index];
  const amount = filteredProduct?.amount;

  return (
    <ul className="flex flex-row items-center">
      <li className="p-3">{amount}</li>
      <li className="flex flex-row">
        <button className=" mr-3" onClick={() => decrementAmount(product)}>
          -
        </button>
      </li>
      <li>
        <button onClick={() => incrementAmount(product)}>+</button>
      </li>
    </ul>
  );
}
