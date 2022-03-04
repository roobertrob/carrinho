import { useEffect } from "react";
import { useState } from "react";
import useCountItems from '../../stores/useCountItems'

interface ProductProps {
    id: number;
    nome: string;
    valor: number;
    img: string;
}

export default function Body() {

    const countItems = useCountItems(state => state.setCountItems)

    
    const [products, setProducts] = useState([]);
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
                        <div className={`flex flex-col justify-around items-center h-auto w-auto m-10 border-2 bg-[#2D4654] rounded-lg`} key={product.id} >
                            <div className={`p-2`}>{product.nome}</div>
                            <img src={product.img} className={`rounded-lg`} />
                            <div className={`p-2 font-extrabold`}>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(product.valor)}</div>
                            <button className={`border-2 p-2 m-5 rounded-lg`} onClick={countItems}>Adicionar ao carrrinho</button>
                        </div>
                    )
                })}
            </div>
        </>
    )


}
