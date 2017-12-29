import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
    let persons = null;
    if (props.showPersons)
    {
        persons =  props.persons.map((person, index) => (
            <Person name={person.name} 
                        age={person.age} 
                        key={person.id}
                        onClick = { () => props.clicked(index) } 
                        changed = { (event) => props.changed(event, person.id)}                      
                />));
    }
    
    return (
        <div>
            {persons}
        </div>
    )
} 

export default Persons;
