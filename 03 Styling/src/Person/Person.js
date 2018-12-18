import React from 'react';
import classes from './Person.css';


const person = ( props ) => {
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