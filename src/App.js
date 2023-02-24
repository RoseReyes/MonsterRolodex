import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [monster, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  console.log(searchField);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
        className={'monsters-search-box'}
        placeholder={'search monster'}
        onChangeHandler={onSearchChange} 
      />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => {
//         return { monsters: users }
//       }
//       ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     });
//   };

//   render() {
//     // cast it as variables to avoid using "this"
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox 
//           className={'monsters-search-box'}
//           placeholder={'search monster'}
//           onChangeHandler={onSearchChange} 
//         />
//         <CardList  monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
