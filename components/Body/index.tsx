import { useEffect } from "react";
import { useState } from "react";
import { Product as ProductType } from '../../types/Product';
import { Product }  from "../Product";


export default function Body() {
  const [products, setProducts] = useState<ProductType[]>([]);

  async function getProducts() {
    const URL = "http://localhost:3000/api/todosProdutos";
    const response = await fetch(URL);
    const json = await response.json();
    setProducts(json);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div
        className={
          'flex flex-wrap place-content-center w-screen h-5/6 bg-[#988B8E] text-white'
        }
      >
        {products.map((product: ProductType) => {
          return (
            <Product
              id={product.id}
              nome={product.nome}
              img={product.img}
              valor={product.valor}
              amount={1}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  );
}
