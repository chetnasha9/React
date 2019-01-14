import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';
class App extends Component {
    render() {
        return (

            <div className = "App" >
            <h1> Heya!Great Start </h1>    
             <Person name="Alex" age="28"/> 
             <Person name="July" age="26">My hobbies: Skating</Person> 
            </div>
        );
    }
}

export default App;