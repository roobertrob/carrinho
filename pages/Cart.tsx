import { Header } from '../components/Header'
import ProductCart from '../components/ProductCart'
import useStore from '../stores/useStore'

export default function Cart() {

    const { products } = useStore()

    return (
        <>
            <Header />
            <main className="flex flex-col h-auto min-h-[90vh] w-screen bg-[#988B8E] text-white">

                <div className="flex justify-start items-center w-2/3">
                    <div className="mt-6 items-center justify-start min-w-[550px]">
                        <div className="flex items-center h-6 text-2xl min-w-[768px] ml-4">
                            Seus produtos no carrinho
                        </div>
                        {products.map((product) => {
                            return (
                                <>
                                    <ProductCart Product={product} key={product.img}/>
                                </>
                            )
                        })}
                    </div>
                </div>

            </main>

        </>
    )
}