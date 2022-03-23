import Format from "functions/Format";
import useStore from "stores/useStore";
import { buttonClasses, divClasses } from "./styles";

export default function SumCart() {
  const { getTotalAmount } = useStore();

  return (
    <div className={divClasses}>
      {Format(getTotalAmount())}
      <button className={buttonClasses}>Finalizar compra</button>
    </div>
  );
}
