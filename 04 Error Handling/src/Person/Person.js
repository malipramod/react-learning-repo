import React from 'react';
import classes from './Person.css';


const person = ( props ) => {
    const rnd = Math.random();
    if(rnd>0.7)
        throw new Error('Something went wrong');
    return (
        <div className={classes.Person}>
            <p >Name: <b>{props.name}</b></p>
            <p>Age: {props.age}</p>
            <p>Profession: {props.children}</p>
            <input type="text" onChange={props.changed} value={props.value}/>
            <button onClick={props.click} className={classes.TestButton} value="Delete" >Delete</button>
        </div>
    )
};

export default person;