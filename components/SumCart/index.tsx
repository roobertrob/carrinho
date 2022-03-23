import Format from "functions/Format";
import useStore from "stores/useStore";
import {
  buttonClasses,
  divClasses,
  titleClasses,
  priceClasses,
} from "./styles";

export default function SumCart() {
  const { getTotalAmount } = useStore();

  return (
    <div className={divClasses}>
      <div className={titleClasses}>Total do carrinho</div>
      <div className={priceClasses}>{Format(getTotalAmount())}</div>
      <button className={buttonClasses}>Finalizar compra</button>
    </div>
  );
}
