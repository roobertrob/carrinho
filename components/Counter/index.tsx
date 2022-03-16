import useCounter from '../../stores/useCounter';
import { CounterProps } from '../../types/Counter';

export default function Counter({ productId }: CounterProps) {
  const { counter, incrementCounter, decrementCounter } = useCounter();

  return (
    <ul className="flex flex-row items-center">
      <li className="p-3">{counter[productId] || 1}</li>
      <li className="flex flex-row">
        <button className=" mr-3" onClick={() => decrementCounter(productId)}>
          -
        </button>
      </li>
      <li>
        <button onClick={() => incrementCounter(productId)}>+</button>
      </li>
    </ul>
  );
}
