import { produtos } from "./products";


export default function todosProdutos(req: any, res: any) {
  const all = produtos.map((todos) => todos.ToObject());
  res.status(200).json(all);
}
