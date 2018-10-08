import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App.js';
ReactDOM.render(<App/>, document.getElementById('app'));

// function Person(props) {
//     return (
//         <div className="personClass" style={personClass}>
//             <h1>Name: {props.Name}</h1>
//             <p>Age: {props.Age}</p>
//         </div>
//     );
// }
// const personClass = {
//     border: '1px solid #eee',
//     boxShadow: '0px 2px 2px #ccc',
//     width: '220px',
//     padding: '20px',
//     display: 'inline-block',
//     marginRight: '20px'
// };

var app = (
    <div>
        <App Name="Pramod" Age="23" />
        <App Name="Pooja" Age="23" />
    </div>
);
// ReactDOM.render(app, document.querySelector('#app'));
