import CartContext from "./CreateContext";

import React, { useReducer } from 'react'

const defaultcartstate = {
    iteam : [],
    totalAmount : 0
}

const cardreducerhandler =(state ,action) => {

    if (action.type === 'ADD' ){
        const updatedTotalAmount =state.totalAmount + action.paylod.price * action.paylod.amount;

      const existingCartItemIndex = state.iteam.findIndex(
        (item) => item.id === action.paylod.id
      );
      const existingCartItem = state.iteam[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.paylod.amount,
        };
        updatedItems = [...state.iteam];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.iteam.concat(action.paylod);
      }
        return {
            iteam :updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.iteam.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.iteam[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.amount === 1) {
          updatedItems = state.iteam.filter(item => item.id !== action.id);

        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.iteam];
          updatedItems[existingCartItemIndex] = updatedItem;

        }
     if(action.type==='CLEARCART'){
      return {
        iteam: updatedItems,
        totalAmount: updatedTotalAmount
      };
     }
        return {
          iteam: updatedItems,
          totalAmount: updatedTotalAmount
        };
      }

 return defaultcartstate
}


const ContextProvider = (props) => {
    const [cartstate, dispatchcart] = useReducer(cardreducerhandler, defaultcartstate)
    const AddtocartIteamhandler = (item) => {
        dispatchcart({type :"ADD", paylod:item})
    }
    const RemoveFromcartIteamhandler = (id) => {
        dispatchcart({type :"REMOVE", id:id})
    }
    
    const clearCarthandler=()=>{
      dispatchcart({type:'CLEARCART'})
    }
    
    const cartContext = {
        iteam:cartstate.iteam,
        totalAmount:cartstate.totalAmount,
         Additem:AddtocartIteamhandler,
         Removeiteam :RemoveFromcartIteamhandler,
         clearCart:clearCarthandler
    }
    
    
    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default ContextProvider
