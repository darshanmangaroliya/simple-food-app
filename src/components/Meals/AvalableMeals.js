import React from 'react';
import classes from "./avalablemeals.module.css"
import Card from "../UI/Card"
import MealsIteam from './MealsIteam/MealsIteam';




const AvalableMeals = () => {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];
   const mealslist = DUMMY_MEALS.map((e)=><MealsIteam  key = {e.id} id={e.id} name={e.name} description={e.description} price={e.price}/>)
    return (
        <section className = {classes.meals}>
            <Card>

            <ul>{mealslist} </ul>
            </Card>
        </section>
    )
}

export default AvalableMeals
