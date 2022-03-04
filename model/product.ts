export default class ProductModel {
    #id: number;
    #nome: string;
    #valor: number;
  
    constructor(
      id: number, 
      nome: string,
      valor: number,
    ) {
      this.#id = id;
      this.#nome = nome;
      this.#valor= valor;
    }
  
    get id() {
      return this.#id;
    }
    get nome() {
      return this.#nome;
    }
    get valor(){
        return this.#valor;
    }
    ToObject() {
      return {
        id: this.#id,
        nome: this.#nome,
        valor:this.#valor,
      };
    }
  }