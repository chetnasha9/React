import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
    state={
        persons:[
            {name:'Alex',age:28},
            {name:'July',age:26},
            {name:'Stephy',age:29}
            ],
        otherSate:"Other value"
    }
    //Passing argument newName 
    switchNameHandler=(newName) =>{
       console.log("Button was clicked");
       this.setState({
            persons:[{name:newName,age:28},
            {name:'July',age:26},
            {name:'Stephy',age:"29"}]
            
    } )
}
    changeNameHandler=(event) => {
        console.log("In name change handler");
        this.setState({
            persons:[{name:"Alex!",age:28},
            {name:'Stephy',age:26},
            {name:event.target.value,age:"29"},
        ]
        
    } )
    }
    
     /*On click in line 28 is an inefficient way of paasing arguments prefer bind() insted*/
    render() {
        return (

            <div className = "App" >
            <h1> Heya!Great Start </h1>    
          
            <button onClick={() => this.switchNameHandler('Mayank')}>Click me to see Alex change!  </button>
             <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.changeNameHandler}/> 
             <Person click={this.switchNameHandler.bind(this,'Karen')} name={this.state.persons[1].name}  changed={this.changeNameHandler} age={this.state.persons[1].age}>My hobbies: Skating</Person> 
           <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.changeNameHandler}></Person>
           
           </div>
        );
    }
}

export default App;