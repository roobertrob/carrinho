import useCartStore from '../../stores/useCart'

interface ProductProps {
    id: number;
    nome: string;
    img: string;
    valor: number;
}

export function Product(Product: ProductProps) {
    const { add } = useCartStore(({ products }) => ({
        add: products.products
    }))

    function handleAddProduct(Product: ProductProps) {
        add(Product)
        return Product;
    }

    return (
        <div className={`flex flex-col justify-around items-center h-auto w-auto m-10 border-2 bg-[#2D4654] rounded-lg`} key={Math.random()} >
            <div className={`p-2`}>{Product.nome}</div>
            <img src={Product.img} className={`rounded-lg`} />
            <div className={`p-2 font-extrabold`}>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(Product.valor)}</div>
            <button className={`border-2 p-2 m-5 rounded-lg`} onClick={() => handleAddProduct(Product)}>Adicionar ao carrrinho</button>
        </div>
    )
}