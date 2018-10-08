import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
// import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] ', props);
        //React 16 to set Ref
        //this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] : componentWillMount');
    }
    componentDidMount() {
        console.log('[Person.js] : componentDidMount');
        if (this.props.position === 0) {
            this.inputElement.focus();
            //this.inputElement.current.focus(); //React 16
        }

    }

    render() {
        console.log('[Person.js] : Render');
        return <WithClass classes={classes.Person}>
            <p >Name: <b>{this.props.name}</b></p>
            <p>Age: {this.props.age}</p>
            <p>Profession: {this.props.children}</p>

            {/* <AuthContext.Consumer>
                {auth => auth ? <p>Authenticated:True</p> : <p></p>}
            </AuthContext.Consumer> */}

            <input
                ref={(inp) => { this.inputElement = inp }}
                //ref={this.inputElement}
                type="text"
                onChange={this.props.changed}
                value={this.props.value} />
            <button onClick={this.props.click} className={classes.TestButton} value="Delete" >Delete</button>
        </WithClass>;
    }
}
Person.propTypes = {
    name: PropTypes.string,
    click: PropTypes.func,
    age: PropTypes.number,
    changed: PropTypes.func,
    value: PropTypes.string,
}
export default Person;