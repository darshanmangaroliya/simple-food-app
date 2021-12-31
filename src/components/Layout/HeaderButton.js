import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../cart/CartIcon';
import classes from "./headerbutton.module.css"
import CartContext from '../../Store/CreateContext';
const HeaderButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cardctx = useContext(CartContext)
    const { iteam } = cardctx;

    // const iteamnumber = cardctx.iteam.reduce((crr,iteam)=>{
    //     return crr + iteam.amount
    // },0)
    const iteamnumber = iteam.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);
      const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
      useEffect(() => {
        if (iteam.length === 0) {
          return;
        }
        setBtnIsHighlighted(true);
    
        const timer = setTimeout(() => {
          setBtnIsHighlighted(false);
        }, 300);
    
        return () => {
          clearTimeout(timer);
        };
      }, [iteam]);
    return (
        <button className = {btnClasses} onClick={props.onClick}>
            <span className = {classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className = {classes.badge}>
                {iteamnumber}
            </span>
        </button>
    )
}

export default HeaderButton
