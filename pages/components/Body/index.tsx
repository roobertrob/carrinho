import { useEffect } from "react";
import { useState } from "react";

interface ProductProps{
    id:number;
    nome: string;
    valor: number;
}

export default function Body() {

    const [products, setProducts] = useState([]);

    async function getProducts(){
        const URL = 'http://localhost:3001/api/todosProdutos'
        const response = await fetch(URL);
        const json= await response.json();
        setProducts(json);
    }

    useEffect(() =>{
        getProducts()
    },[])

    return (
        <>
            <div className={"flex flex-wrap place-content-center w-screen h-full bg-[#988B8E] text-white"}>
               {products.map((product: ProductProps) => {
                   return(
                       <div className={`flex justify-center items-center h-60 w-60 m-10 border-2 bg-gray-700 rounded-lg`} key={product.id} >
                           <div className={`p-2`}>{product.nome}</div>
                           <div className={`p-2`}>{product.valor}</div>   
                       </div>
                   )
               })}
            </div>
        </>
    )

    
}
