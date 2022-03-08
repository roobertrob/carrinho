import { Header } from '../../components/Header'
import { ProductCart } from '../../components/ProductCart'
import {useCart} from '../../stores/useCart'

interface ProductProps {
    id: number;
    nome: string;
    img: string;
    valor: number;
}

export default function Cart(){

    const {products}  = useCart(store => store.state)
    
    
    return(
        <>
        <Header/>
        {console.log(products)}; 
        {console.log (typeof products)};
        

        {products.map((product:ProductProps)=>{
            <ProductCart id={product.id} nome={product.nome} valor={product.valor} img={product.img}/>
        })}
        
        </>
    )
}