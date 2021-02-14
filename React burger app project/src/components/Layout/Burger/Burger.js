import React from 'react'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const Burger = (props) => {

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='salad' />
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}




export default Burger;