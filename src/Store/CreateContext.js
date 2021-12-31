import React from "react";


const CartContext = React.createContext({
  iteam:[],
  totalAmount:0,
   Additem:(iteam)=>{} ,
   Removeiteam :(id)=>{},
   clearCart:()=>{}
})

export default CartContext