import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Person from '../components/Persons/Person/Person';
//import Radium, {StyleRoot} from 'radium';

class App extends Component {

  state = {
      persons : [
        { id :'XXXX', name : 'Max', age : 28 },
        { id :'YYYY', name : 'Manu', age : 29 },
        { id :'ZZZZ', name : 'DK', age : 35 }
      ],
      showPersons : false
  };

  switchNameHandler = (newName) =>
  {
    this.setState({ persons : [
        { id :'XXXX', name : newName, age : 28 },
        { id :'YYYY', name : 'Manu', age : 29 },
        { id :'ZZZZ', name : 'DK', age : 35 }
      ]});
  }

  nameChangedHandler = (event, id) =>
  {
    const personIndex = this.state.persons.findIndex(person => person.id === id);   
    const persons = [...this.state.persons];    
    const person = persons[personIndex];
    person.name = event.target.value;
    this.setState({ persons : persons});
  }

  togglePersonHandler = () =>
  {
    const toggleValue = !this.state.showPersons;
    this.setState({ showPersons: toggleValue });
  }

  deletePersonHandler = (personIndex) =>
  {
    const persons = [...this.state.persons];
    //const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    // Scoped Styling
    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor: 'pointer',
      //':hover': { backgroundColor : 'lightgreen', color : 'black' }
    };

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (<div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person name={person.name} 
                        age={person.age} 
                        key={person.id}
                        onClick = { this.deletePersonHandler.bind(this,index) } 
                        changed = {(event) => this.nameChangedHandler(event,person.id)}                      
                />
              )})          
          }            
          {/*<Person name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              onClick = { this.switchNameHandler.bind(this,'Max!') } 
              />
          <Person name={this.state.persons[1].name} 
              age={this.state.persons[1].age}                    
              onClick = { this.switchNameHandler.bind(this,'Maximillian!') } 
              changed = {this.nameChangedHandler}
              >My Hobbies:Driving</Person>
          <Person name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>*/}
        </div>);

        style.backgroundColor = 'red';
        style.color = 'black';
        // style[':hover'] = { backgroundColor : 'salmon', color : 'black' }
    } 
    

    return (
      //<StyleRoot>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button 
            style = {style} 
            onClick = {this.togglePersonHandler}>Toggle Persons</button>
          
          {persons}

          {/* this.state.showPersons ? 
          <div>           
            <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                onClick = { this.switchNameHandler.bind(this,'Max!') } 
                />
            <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age}                    
                onClick = { this.switchNameHandler.bind(this,'Maximillian!') } 
                changed = {this.nameChangedHandler}
                >My Hobbies:Driving</Person>
            <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
          </div>
          :null*/}        
        </div>
      //</StyleRoot>
    );
  }
}

//export default Radium(App);
export default App;
