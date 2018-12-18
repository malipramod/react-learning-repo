import React from 'react';
import '../App.css';
// const personClass = {
//     border: '1px solid #eee',
//     boxShadow: '0px 2px 2px #ccc',
//     width: '220px',
//     padding: '20px',
//     display: 'inline-block',
//     marginRight: '20px'
// };
const person = (props) => {
    return (
        <div className="personClass">
            <p onClick={props.click}>Name: <b>{props.name}</b></p>
            <p>Age: {props.age}</p>
            <p>Hobbies: {props.children}</p>
            <input type="text" onChange={props.changed} value={props.value}/>
        </div>
       // React.createElement('div',null,React.createElement('h1',null,'This is header'))
    );
}
export default person;