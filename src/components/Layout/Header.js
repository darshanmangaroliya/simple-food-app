import React from 'react';
import classes from "./header.module.css";
import img from "../../Assat/meals.jpg"
import HeaderButton from './HeaderButton';

const Header = (props) => {
    return (
        <>
          <header className = {classes.header}>
   <h1>Reactmeals</h1>
   <HeaderButton  onClick = {props.cartShowHandler}/>
        </header> 
        <div className = {classes['main-image']}>
            <img src={img} alt="A delecias food table is waiting for you!"  />
        </div>

        </>
    )
}

export default Header
