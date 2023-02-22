import { Component } from 'react';
import './App.css';


class App extends Component {
  // 1. initialize the state
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  // 3. runs after the component mounts
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users}
      }
    ));
  }

  // 2. this runs after the constructor and render the initial UI
  // 4: get re-renders when the state object change
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })}
      </div> 
    ); 
  }
}

export default App;
