import { Header } from "../components/Header";
import ProductCart from "../components/ProductCart";
import SumCart from "../components/SumCart";
import useStore from "../stores/useStore";

export default function Cart() {
  const { products } = useStore();

  return (
    <>
      <Header />
      <main className="flex flex-col items-center h-auto min-h-[90vh] w-screen bg-[#988B8E] text-white">
        <div className="flex justify-around items-center w-2/3">
          <div className="m-6 items-center min-w-[550px]">
            <div className="h-6 text-2xl min-w-[768px] m-4">
              Seus produtos no carrinho
            </div>

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
