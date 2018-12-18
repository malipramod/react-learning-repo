import React from 'react';
import classes from './Order.css';
const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput=ingredients.map(ig=>{
        return <span 
        style={{
            textTransform:'Capitalize',
            display:'inline-block',
            margin:'0 8px', 
            border:'1px solide #ccc',
            padding:'5px'}}
        key = {ig.name}>{ig.name}({ig.amount})</span>;
    })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}(1) </p>
            <p>Price: <strong>USD {props.price} </strong></p>
        </div>
    )
};

export default order;