import { Header } from '../components/Header'
import ProductCart from '../components/ProductCart'
import useStore from '../stores/useStore'

export default function Cart() {

    const { products, setProducts } = useStore()

    return (
        <>
            {console.log(products)}
            {console.log(typeof products)}
            {products.map(product => console.log(product.id))}
            <div className="flex h-screen w-screen bg-black text-white">
                {products.map((product) => {
                    <div key={product.id*10000} >
                        {product.id} {product.nome} {product.valor} {product.img}
                    </div>
                })}
            </div>

        </>
    )
}