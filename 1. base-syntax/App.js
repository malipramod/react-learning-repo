import React, { Component } from 'react';
import Person from './Person/Person';
class App extends Component {

    state = {
        persons: [
            { name: 'Pramod', age: 23 },
            { name: 'Pooja', age: 22 },
            { name: 'Ramesh', age: 29 }
        ]
    }

    switchNameHandler = (newName) => {
        //this.state.persons[0].name="Pramod Mali";
        this.setState({
            persons: [
                { name: newName, age: 23 },
                { name: 'Pooja', age: 25 },
                { name: 'Ramesh', age: 29 }
            ]
        });
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: "Pramod", age: 23 },
                { name: event.target.value, age: 25 },
                { name: 'Ramesh', age: 29 }
            ]
        });
    }
    render() {
        const style = {
            backgroundColor:'white',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            cursor:'pointer'
        }
        return (
            <div>
                <h1 >React App</h1>
                <button style={style} onClick={this.switchNameHandler.bind(this, 'Mali Pramod')}>Say My name</button><br />
                {/* <button onClick={()=>this.switchNameHandler('Mali Pramod')}>Say My name</button><br /> */}

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Pramod Mali')}
                >Traveling, Games</Person>

                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangeHandler}
                >Reading, Writing</Person>
                <Person

                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} >Reading, Writing</Person>

            </div>
        );
    }
}
export default App;