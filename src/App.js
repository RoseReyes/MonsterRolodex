import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// passing a function instead of an object when updating state
// setState is asynchronous
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Rose', lastName: 'Reyes'},
      company: 'ZTM'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName} , I work at {this.state.company}</p>
          <button onClick={() => {
            this.setState(() => {
              return {
                name: {firstName: 'Andrei', lastName: 'Negaoia'}
              }
            }, 
            () => {
              console.log(this.state);
            });
          }}
          >Change Name</button>
        </header>
      </div>
    ); 
  }
}

export default App;
