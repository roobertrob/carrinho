import { Header } from '../../components/Header'
import {useCart} from '../../stores/useCart'

interface ProductProps {
    id: number;
    nome: string;
    img: string;
    valor: number;
}

export default function Cart(){

    const { products } = useCart(store => store.state)
    
    return(
        <>
        <Header/>

        {products.map((product:ProductProps)=>{
            <table>
                <tr>
                    <td>{product.img}</td>
                    <td>{product.nome}</td>
                    <td>{product.valor}</td>
                </tr>
            </table>
        })}
        
        </>
    )
}