import { Header } from "components/Header";
import ProductCart from "components/ProductCart";
import SumCart from "components/SumCart";
import useStore from "stores/useStore";
import { divClasses, mainContainerClasses, secDivClasses, thirDivClasses } from "./styles";

export default function Cart() {
  const { products } = useStore();

  return (
    <>
      
      <Header />
      <main className={mainContainerClasses}>
        <div className={divClasses}>
          <div className={secDivClasses}>
            <div className={thirDivClasses}>Seus produtos no carrinho</div>

            {products.map((product) => {
              return <ProductCart Product={product} key={product.img} />;
            })}
          </div>
        </div>
        <SumCart />
      </main>
    </>
  ); 
}
