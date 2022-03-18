import Format from '../../functions/Format';
import useStore from '../../stores/useStore';
import { ProductProps } from '../../types/ProductCart';
import Counter from '../Counter';

export default function ProductCart({ Product }: ProductProps) {
  const { removeProduct } = useStore();

  return (
    <div className="m-3 p-1 hover:opacity-80">
      <ul className="w-full bg-[#2D4654] border rounded-lg flex justify-center items-center ">
        <li>
          <Counter product={Product} />
        </li>

        <li className="flex justify-center">
          <img src={Product.img} className="rounded-full m-2 w-1/3" />
        </li>
        <li className="text-center">{Product.nome}</li>
        <li className=" w-1/3 text-center">
          {Format(Product.valor)}
        </li>
        <button
          onClick={() => removeProduct(Product)}
          className={`flex items-center m-4`}
        >
          <img src="/trash.svg" alt="trash" className="w-6" />
          Excluir
        </button>
      </ul>
    </div>
  );
}
