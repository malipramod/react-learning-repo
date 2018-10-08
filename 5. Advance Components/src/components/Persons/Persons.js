import React, { Component } from 'react';
import Person from './Person/Person';


class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] ', props);
    }

    componentWillMount() {
        console.log('[Persons.js] : componentWillMount');
    }
    componentDidMount() {
        console.log('[Persons.js] : componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log("[Update Person.js]: Inside -- componentWillReceiveProps ", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Update Person.js]: Inside -- shouldComponentUpdate ", nextProps, nextState);
        return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.click !== this.props.click;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("[Update Person.js]: Inside -- componentWillUpdate ", nextProps, nextState);
    }
    componentDidUpdate() {
        console.log("[Update Person.js]: Inside -- componentDidUpdate ", this.props, this.state);
    }
    render() {
        console.log('[Persons.js] : Render');

        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                value={person.name}
                position={index}
                changed={(event) => this.props.changed(event, person.id)} >
                {person.profession}
            </Person>
        })
    }
}


export default Persons;
