import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: 'Tony', age: 50, profession: "Software Engineer" },
      { id: "2", name: 'Thor', age: 1500, profession: "Magician" },
      { id: "3", name: 'Cap', age: 110, profession: "Army" }
    ],
    showPersons: true,
    buttonName: "Hide Avengers"
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
    this.setState({
      showPersons: !doesShow,
      buttonName: text
    })
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}                
                value={person.name}
                changed={(event) => this.nameChangedHandler(event, person.id)} >
                {person.profession}
              </Person>
            </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>The Avengers</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>{this.state.buttonName}</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
