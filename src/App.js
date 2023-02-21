import { Component } from 'react';
import './App.css';

// resolving error should have a unique KEY prop 
// by adding a unique identifier on each element being rendered
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
         {
          name: 'Linda',
          id: '0001'
         },
         {
          name: 'Frank',
          id: '0002'
         },
         {
          name: 'Jacky',
          id: '0003'
         }
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div> 
    ); 
  }
}

export default App;
