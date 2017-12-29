import React from 'react';
import classes from './Person.css';
//import Radium from 'radium';

const person = (props) => {

// const style = {
//         '@media (min-width: 500 px)' : {
//             width : '450px'
//         }
//     }; 

    return (        
           <div className={classes.Person}>
               <p onClick={props.onClick}>I am here {props.name} and I am {props.age} years old</p>
               <p>{props.children}</p>
               <input type="Text" defaultValue={props.name} onChange={props.changed} />
               <button>Submit</button>
           </div>        
    )   
}

//export default Radium(person);
export default person;