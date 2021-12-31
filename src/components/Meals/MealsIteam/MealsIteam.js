import React, { useContext } from 'react';
import CartContext from '../../../Store/CreateContext';
import Mealiteamform from './Mealiteamform';
import classes from './mealsiteam.module.css'

const MealsIteam = (props) => {
    const cardctx =  useContext(CartContext)

const addtocarthandler = (amount)=> {
 cardctx.Additem({
     id : props.id,
     name:props.name,
     amount: amount,
     price :props.price
 })
}
    const price =` $${props.price.toFixed(2)}`
    return (
        <li className = {classes.meal}>
         <div>
             <h3>{props.name}</h3>
             <div className = {classes.description}>{props.description}</div>
             <div className = {classes.price}>{price}</div>
             </div> 
         <div>
            <Mealiteamform onAddToCart = {addtocarthandler}/> 
             </div>  
        </li>
    )
}

export default MealsIteam
