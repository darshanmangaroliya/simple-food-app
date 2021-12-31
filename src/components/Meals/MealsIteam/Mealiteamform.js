import React, { useState ,useRef} from 'react';
import Input from '../../UI/Input';
import classes from "./mealiteamform.module.css"


const Mealiteamform = (props) => {

    const amountenterref = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)

    const amounthandler = (event) => {
        event.preventDefault();
       const enteredAmount = amountenterref.current.value
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
          ) {
            setAmountIsValid(false);
            return;
          }
      
          props.onAddToCart(enteredAmountNumber);
        };

    

    return (
        <form className = {classes.form} onSubmit={amounthandler}>
           <Input label="Amount"
           
           ref = {amountenterref}
           input= {{
           
           id:"amount",
           type:"number",
           min:"1",
           max:"5",
           step:"1",
           defaultValue:"1"
           }}/>
           <button type="submit"> + Add to Cart</button>
           {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}

        </form>
    )
}

export default Mealiteamform
