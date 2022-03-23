import Format from "functions/Format";
import useStore from "stores/useStore";
import { ProductProps } from "types/ProductCart";
import Counter from "components/Counter";
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
        <div className={valueClasses}>
          <li>Valor unitário</li>
          <li>{Format(Product.valor)}</li>
        </div>
        <div className={valueClasses}>
          <li>Total</li>
          <li>{Format(Product.valor*Product.amount)}</li>
        </div>
        <button
          onClick={() => removeProduct(Product)}
          className={buttonClasses}
        >
          <img src="/trash.svg" alt="Exluir produto" className={svgClasses} />
          
        </button>
      </ul>
    </div>
  );
}
