import { useEffect } from "react";
import { useState } from "react";
import { Product } from "../Product";

interface ProductProps {
    [x: string]: any;
    id: number;
    nome: string;
    valor: number;
    img: string;
}

export default function Body() {


    const [products, setProducts] = useState([] as unknown as ProductProps);

    async function getProducts() {
        const URL = 'http://localhost:3001/api/todosProdutos'
        const response = await fetch(URL);
        const json = await response.json();
        setProducts(json);
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className={"flex flex-wrap place-content-center w-screen h-full bg-[#988B8E] text-white"}>
                {products.map((product: ProductProps) => {
                    return (
                        <Product id={product.id} nome={product.nome} img={product.img} valor={product.valor} key={product.id}/>                      
                    )
                })}
            </div>

            
        </>
    )


}
