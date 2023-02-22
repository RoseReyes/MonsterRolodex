import { Component } from 'react';
import './App.css';


class App extends Component {
  // 1. initialize the state
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
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
    // filter original list with the current search field
    const filteredMonsters = this.state.monsters.filter((monster) => { 
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
      <input className='search-box' type='search' placeholder='search monster' onChange={(event) => {
         // get the new value of searchField
         const searchField = event.target.value.toLocaleLowerCase();
         // update the searchField  
         this.setState(() => {
              return { searchField }
            }
          );
        }} 
      />
      {filteredMonsters.map((monster) => { // display filtered list
          return <div key={monster.id}><h1>{monster.name}</h1></div>;
      })}
      </div> 
    ); 
  }
}

export default App;
