import Format from "../../functions/Format";
import useStore from "../../stores/useStore";
import { ProductProps } from "../../types/ProductCart";
import Counter from "../Counter";
import {
  buttonClasses,
  divClasses,
  imgClasses,
  liImgClasses,
  svgClasses,
  ulClasses,
  valueClasses,
} from "./styles";

export default function ProductCart({ Product }: ProductProps) {
  const { removeProduct } = useStore();

  return (
    <div className={divClasses}>
      <ul className={ulClasses}>
        <li>
          <Counter product={Product} />
        </li>

        <li className={liImgClasses}>
          <img src={Product.img} className={imgClasses} />
        </li>
        <li>{Product.nome}</li>
        <li className={valueClasses}>{Format(Product.valor)}</li>
        <button
          onClick={() => removeProduct(Product)}
          className={buttonClasses}
        >
          <img src="/trash.svg" alt="trash" className={svgClasses} />
          Excluir
        </button>
      </ul>
    </div>
  );
}
