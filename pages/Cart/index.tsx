import { Header } from '../../components/Header'
import  ProductCart  from '../../components/ProductCart'
import useCartStore from '../../stores/useCart'

interface ProductProps {
    id: number;
    nome: string;
    img: string;
    valor: number;
}

export default function Cart(){

    const {products}  = useCartStore(store => store)
    
    
    return(
        <>
        <Header/>
        {console.log(products)}; 
        {console.log (typeof products)};
        

        {products.map((product:ProductProps)=>{ //A propriedade 'map' não existe no tipo 'ProductProps'.
            <ProductCart id={product.id} nome={product.nome} valor={product.valor} img={product.img}/>
        })}
        
        </>
    )
}