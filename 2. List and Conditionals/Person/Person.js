import React from 'react';
import '../App.css';
const style = {
    backgroundColor: 'red',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
}
const person = (props) => {
    return (
        <div className="personClass">
            <p >Name: <b>{props.name}</b></p>
            <p>Age: {props.age}</p>
            <p>Hobbies: {props.children}</p>
            <input type="text" onChange={props.changed} value={props.value}/>
            <button onClick={props.click} style={style} value="Delete" >Delete</button>
        </div>
       // React.createElement('div',null,React.createElement('h1',null,'This is header'))
    );
}
export default person;