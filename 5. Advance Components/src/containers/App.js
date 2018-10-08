import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClassV2';
import Aux from '../hoc/Auxiliary';
export const AuthContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] ', props);
  }

  componentWillMount() {
    console.log('[App.js] : componentWillMount');
  }
  componentDidMount() {
    console.log('[App.js] : componentDidMount');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Update App.js]: Inside -- shouldComponentUpdate ", nextProps, nextState);
  //   return nextState.person !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log("[Update App.js]: Inside -- componentWillUpdate ", nextProps, nextState);
  }
  componentDidUpdate() {
    console.log("[Update App.js]: Inside -- componentDidUpdate ", this.props, this.state);
  }
  state = {
    persons: [
      { id: "1", name: 'Tony', age: 50, profession: "Software Engineer" },
      { id: "2", name: 'Thor', age: 1500, profession: "Magician" },
      { id: "3", name: 'Cap', age: 110, profession: "Army" }
    ],
    showPersons: true,
    buttonName: "Hide Avengers",
    toggleClicked: 0,
    authenticated: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    let text = "";
    if (doesShow === true)
      text = "Show Avengers";
    else if (doesShow === false)
      text = "Hide Avengers";
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        buttonName: text,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] : Render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }
    return (
      <Aux>
        <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          buttonName={this.state.buttonName}
          clicked={this.togglePersonsHandler}
          appTitle={this.props.title}
          login={this.loginHandler}
        />
        {persons}
        {/* <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider> */}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default WithClass(App, classes.App);