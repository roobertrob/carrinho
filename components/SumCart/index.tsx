import { useEffect } from 'react';
import { useState } from 'react';
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
    <div className="flex flex-col justify-around items-center h-auto w-auto m-10 border-2 bg-[#2D4654] rounded-lg hover:scale-105 delay-150 shadow-lg">
      {sumCart}
    </div>
  );
}
