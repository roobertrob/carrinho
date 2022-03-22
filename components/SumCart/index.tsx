import Format from "../../functions/Format";
import useStore from "../../stores/useStore";

export default function SumCart() {
  const { getTotalAmount } = useStore();

  return (
    <div className="flex flex-row justify-around items-center h-[100px] w-[400px] m-10 border-2 bg-[#2D4654] rounded-lg hover:scale-105 delay-150 shadow-lg">
      {/* 
        Executamos a função que fará os cálculos a cada novo render do componente, trazendo a soma dos valores atualizada.
        O useEffect é desnecessário aqui.
      */}
      {Format(getTotalAmount())}
      <button
        className={`border p-3 rounded-lg hover:bg-gray-500 hover:text-gray-900 font-bold`}
      >
        Finalizar compra
      </button>
    </div>
  );
}
