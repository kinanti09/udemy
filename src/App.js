import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      newTodo: 'handle',
    };
    
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
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <h2 className="text-center">Todos App</h2>
            <input 
              type="text" 
              name="todo" 
              className="form-control"
              placeholder="Add a new todo" 
              onChange={this.handlechange}
              value={this.state.newTodo}
            />
            <ul className="list-group">
             {this.state.todos.map((item, index) => {
               return <li key={item.id} className="list-groub-item">{item.name}</li>
             })}
             
            </ul>
          </div>
        </header>    
      </div>
    );
  } 
}

export default App;
