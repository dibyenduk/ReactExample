import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import CockPit from '../components/Cockpit/Cockpit'
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
    return (
      //<StyleRoot>
        <div className={classes.App}>
          <CockPit toggled = {this.togglePersonHandler} showPersons = {this.state.showPersons} />          
          <Persons showPersons = {this.state.showPersons}
            persons = {this.state.persons} 
            clicked = {this.deletePersonHandler} 
            changed = {this.nameChangedHandler} />                  
        </div>
      //</StyleRoot>
    );
  }
}

//export default Radium(App);
export default App;
