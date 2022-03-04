import  Body  from "../components/Body";
import Cart from "../components/Cart";
import {Header} from "../components/Header";

export default function Home(){
  return(
    <div className={``}> 
      <Header/>
      <Body/>
      <Cart/>
    </div>
  )
}