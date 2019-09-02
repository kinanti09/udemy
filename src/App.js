import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      todos: [{
        id: 1,
        name: "Play golf"
      },{
        id: 2,
        name: "Buy some clothes"
      },{
        id: 3,
        name: "Write some code"
      },{
        id: 4,
        name: "Watch bahdcasts"
      }]
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <h2 className="text-center">Todos App</h2>
            <ul className="list-group">
             {this.state.todos.map((item) => {
               return <li className="list-groub-item">{item.name}</li>
             })}
             
            </ul>
          </div>
        </header>
      </div>
    );
  } 
}

export default App;
