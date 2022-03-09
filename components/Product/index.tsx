import useStore from '../../stores/useStore'
interface ProductProps {
    id: number;
    nome: string;
    img: string;
    valor: number;
}

export function Product(Product: ProductProps) {
    const { products, setProducts } = useStore();

    return (
        <div className={`flex flex-col justify-around items-center h-auto w-auto m-10 border-2 bg-[#2D4654] rounded-lg`} key={Math.random()} >
            <div className={`p-2`}>{Product.nome}</div>
            <img src={Product.img} className={`rounded-lg`} />
            <div className={`p-2 font-extrabold`}>{new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(Product.valor)}</div>
            {console.log(products)}
            <button className={`border-2 p-2 m-5 rounded-lg`} onClick={() => setProducts(Product)}>Adicionar ao carrrinho</button>
        </div>
    )
}