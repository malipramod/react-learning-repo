import React, { Component } from 'react';
import Person from './Person/Person';
class App extends Component {

    state = {
        persons: [
            { id:"1",name: 'Tony', age: 50 },
            { id:"2",name: 'Thor', age: 1500 },
            { id:"3",name: 'Cap', age: 110 }
        ],
        showPersons: true,
        buttonName: "Hide Avengers"
    }
    

    deleteNameHandler = (personsIndex) => {
        const persons = [...this.state.persons]; //ES 6
        // const persons = this.state.persons.slice(); // ES 5
        persons.splice(personsIndex, 1);
        this.setState({ persons: persons });
    }
    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        // const person = Object.assign({},this.state.persons[personIndex]); //ES 5
        const person = { ...this.state.persons[personIndex] }; //ES 6
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    togglerPersonsHandler = (event) => {
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
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deleteNameHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                value={person.name}
                                changed={(event) =>this.nameChangeHandler(event,person.id)}
                                />
                        )
                    })}                    
                </div>
            );
        }
        return (
            <div className="App">

                <h1 >React App</h1>
                <button style={style}
                    onClick={this.togglerPersonsHandler}>
                    {this.state.buttonName}</button><br />
                {persons}


            </div>
        );
    }
}
export default App;