import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import ContextProvider from "./Store/ContextProvider";

function App() {

  const [showCart, setShowCart] = useState(false)

  const cartShowHandler = ()=>{
    setShowCart(true)
  }
  const carthideHandler = () =>{
    setShowCart(false)
  }
  return (
    <ContextProvider>
     {showCart && <Cart  carthideHandler={carthideHandler}/>}
    <Header cartShowHandler ={cartShowHandler}/>
  
  <main>
    <Meal/>
  </main>


    </ContextProvider>
  );
}

export default App;
