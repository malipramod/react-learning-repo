import React from 'react';

const userInput = (props) => {
    const style={
        border:'2px solid green',
        width:'30%'
    };
    return <input style={style} 
    type="text" onChange={props.changed} 
    value={props.currentUserName}/>;
}

export default userInput;