import { useRouter } from "next/router";
import { buttonClasses, divClasses, divLineClasses, svgClasses } from "./styles";

export function Header() {
  const router = useRouter();

  function redirect() {
    router.push("/Cart");
  }
  function home() {
    router.push("/");
  }

  return (
    <>
      <div className={divClasses}>
        <div>
          <button className={buttonClasses} onClick={home}>
            Company
          </button>
        </div>

        <div className={divLineClasses} />

        <button onClick={redirect}>
          <img src="/cart.svg" alt="carrinho de compras" className={svgClasses} />
        </button>
      </div>
    </>
  );
}
