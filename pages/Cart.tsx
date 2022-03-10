import { Header } from '../components/Header'
import useStore from '../stores/useStore'

export default function Cart() {

    const { products, removeProduct } = useStore()

    return (
        <>
            <Header />
            {products.map(product => console.log(product.id))}
            <div className="flex flex-col h-auto min-h-screen w-screen align-center justify-between bg-[#988B8E] text-white">
                <div className="m-6 w-2/3 h-auto min-h-screen">
                    <div className="block justify-center w-2/3 h-6 min-w-[768px]">
                        <h1 className={"text-2xl m-2"}>Seus produtos no carrinho</h1>
                    </div>
                    <table className="w-2/3 m-6 table-fixed">
                        <tbody className="mt-6 items-center justify-center">
                            {products.map((product) => {
                                return (
                                    <>
                                        <tr key={product.id * 10000} className="m-6 bg-[#2D4654] border" >
                                            <td className="flex justify-center">
                                                <img src={product.img} className="rounded-full m-2 w-1/3" />
                                            </td>
                                            <td className="text-center">
                                                {product.nome}
                                            </td>
                                            <td className=" w-1/3 text-center">
                                                {new Intl.NumberFormat('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL',
                                                }).format(product.valor)}
                                            </td>
                                            <button onClick={() => removeProduct(product)}>
                                                <img src="/trash.svg" alt="trash" />
                                                Excluir
                                            </button>
                                        </tr>
                                        <tr className="h-4">

                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}