import useStore, { Product } from "../../stores/useStore";
import Counter from "../Counter";

interface ProductProps {
  Product: Product;
}

export default function ProductCart({ Product }: ProductProps) {
  const { removeProduct } = useStore();

  return (
    <div className="m-3 p-1 hover: opacity-80">
      <ul className="w-full bg-[#2D4654] border rounded-lg flex justify-center items-center">
        <li>
          <Counter />
        </li>

        <li className="flex justify-center">
          <img src={Product.img} className="rounded-full m-2 w-1/3" />
        </li>
        <li className="text-center">{Product.nome}</li>
        <li className=" w-1/3 text-center">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Product.valor)}
        </li>
        <button
          onClick={() => removeProduct(Product)}
          className={`flex items-center`}
        >
          <img src="/trash.svg" alt="trash" className="w-6 m-1" />
          Excluir
        </button>
      </ul>
    </div>
  );
}
