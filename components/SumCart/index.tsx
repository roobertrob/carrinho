import { useEffect } from 'react';
import { useState } from 'react';
import Format from '../../functions/Format';
import useStore from '../../stores/useStore';

export default function SumCart() {
  const { products } = useStore();
  const [sumCart, setSumCart] = useState(0);

  useEffect(() => {
    for (let i = 0; i < products.length; i++) {
      setSumCart(sumCart + products[i].amount * products[i].valor);
    }
  }, [products]);

  return (
    <div className="flex flex-row justify-around items-center h-[100px] w-[400px] m-10 border-2 bg-[#2D4654] rounded-lg hover:scale-105 delay-150 shadow-lg">
      {Format(sumCart)}
      <button
        className={`border p-3 rounded-lg hover:bg-gray-500 hover:text-gray-900 font-bold`}
      >
        Finalizar compra
      </button>
    </div>
  );
}
