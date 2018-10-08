import React from 'react';

import classes from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    let validationError=null;
    const inputClasses=[classes.InputElement];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        validationError = <p>Please enter some valid value!</p>;
    }
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    onChange={props.changed}
                    value={props.value}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );

};

export default input;