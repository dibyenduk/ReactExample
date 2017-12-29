import React from 'react'
import logo from '../../logo.svg'
import classes from './Cockpit.css'


const CockPit = (props) => {

    let btnStyle = classes.button;

    if (props.showPersons)
    {
        btnStyle = classes.Red;
    }

    return (
    <div className={classes.CockPit} >
        <header className={classes.header}>
            <img src={logo} className={classes.logo} alt="logo" />
            <h1 className={classes.title}>Welcome to React</h1>
        </header>
        <p className={classes.intro}>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button 
            className = {btnStyle}
            onClick = {props.toggled}
        >Toggle Persons</button>
    </div>
);
}


export default CockPit;