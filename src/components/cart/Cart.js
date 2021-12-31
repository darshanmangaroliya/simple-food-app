import React, { useContext, useState } from 'react';
import CartContext from '../../Store/CreateContext';
import classes  from './cart.module.css'
import Model from './Model';
import CartItem from './CartItem'
import Checkout from './Checkout';


const Cart = (props) => {
  const cardctx = useContext(CartContext)
 const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);


  const totalAmount = `$${cardctx.totalAmount.toFixed(2)}`;
  const hasItems = cardctx.iteam.length > 0;

const cartItemRemoveHandler =(id)=>{
  cardctx.Removeiteam(id)
}
const cartItemAddHandler = (item )=> {
  cardctx.Additem(item)

}

const datahandler = (data) => {

  fetch('https://react-foodmeal-303ac-default-rtdb.firebaseio.com/orderdetails.json',{

method:'POST',
body:JSON.stringify({

  user:data,
  fooditeam:cardctx.iteam

})

  })
  setIsSubmitting(false);
    setDidSubmit(true);
    cardctx.clearCart();
}
const cartItems = (
    <ul className={classes['cart-items']}>
     {cardctx.iteam.map((item)=><CartItem 
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
     
     
     />)}
    </ul>
  );
 const cartModalContent =(
   <>
     {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.carthideHandler} onConfirm ={datahandler}/>}
     {!isCheckout&& <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.carthideHandler}>
          Close
        </button>
       { hasItems&&  <button className={classes.button} onClick={()=>setIsCheckout(true)}>Order</button>}
      </div>}
   </>
 )

 const isSubmittingModalContent = <p>Sending order data...</p>;

 const didSubmitModalContent = (
   <React.Fragment>
     <p>Successfully sent the order!</p>
     <div className={classes.actions}>
     <button className={classes.button} onClick={props.carthideHandler}>
       Close
     </button>
   </div>
   </React.Fragment>
 );
  return (
    <Model carthideHandler={props.carthideHandler}>
       {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Model>
  );
};

export default Cart;