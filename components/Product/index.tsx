import Format from '../../functions/Format';
import useStore from '../../stores/useStore';
import { Product } from '../../types/Product';

export function Product(Product: Product) {
  const { setProducts } = useStore();

  return (
    <div
      className={`flex flex-col justify-around items-center h-auto w-auto m-10 border-2 bg-[#2D4654] rounded-lg hover:scale-105 delay-150 shadow-lg`}
    >
      <div className={`p-2`}>{Product.nome}</div>
      <img src={Product.img} className={`rounded-lg`} loading="lazy" />
      <div className={`p-2 font-extrabold`}>{Format(Product.valor)}</div>

      <button
        className={`border-2 p-2 m-5 rounded-lg`}
        onClick={() => setProducts(Product)}
      >
        Adicionar ao carrrinho
      </button>
    </div>
  );
}
