export default class ProductModel {
  #id: number;
  #nome: string;
  #valor: number;
  #img: string;

  constructor(id: number, nome: string, valor: number, img: string) {
    this.#id = id;
    this.#nome = nome;
    this.#valor = valor;
    this.#img = img;
  }

  get id() {
    return this.#id;
  }
  get nome() {
    return this.#nome;
  }
  get valor() {
    return this.#valor;
  }
  get img() {
    return this.#img;
  }
  ToObject() {
    return {
      id: this.#id,
      nome: this.#nome,
      valor: this.#valor,
      img: this.#img,
    };
  }
}
