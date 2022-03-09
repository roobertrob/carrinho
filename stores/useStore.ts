import create, {GetState} from "zustand";
import { NamedSet } from "zustand/middleware";

export type Product = {
    id: number;
    nome: string;
    img: string;
    valor: number;
  };
  
  export type Store = {
    products: Product[];
    setProducts: (product: Product) => void;
  };


const useStore = create((set: NamedSet<Store>) => ({
    products: []as Array<Product>,
    setProducts: (product:Product) => 
        set((state: any)=>({
        products: [
            ...state.products,
            {
                id: product.id,
                nome: product.nome,
                img: product.img,
                valor: product.valor,
            },
            
        ]
    })),
    // removeProduct: id =>
    // set(state => ({
    //   product: state.products.filter(product => product.id !== id)
    // })),
}))
export default useStore

