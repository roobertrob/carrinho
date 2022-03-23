import Format from "../../functions/Format";
import useStore from "../../stores/useStore";
import { Product } from "../../types/Product";
import {
  buttonClasses,
  divProductClasses,
  divProductNameClasses,
  imgClasses,
  valueClasses,
} from "./styles";

export function Product(Product: Product) {
  const { setProducts } = useStore();

  return (
    <div className={divProductClasses}>
      <div className={divProductNameClasses}>{Product.nome}</div>
      <img src={Product.img} className={imgClasses} loading="lazy" />
      <div className={valueClasses}>{Format(Product.valor)}</div>
      <button className={buttonClasses} onClick={() => setProducts(Product)}>
        Adicionar ao carrrinho
      </button>
    </div>
  );
}
