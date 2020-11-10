import React, { Component } from 'react'

import { CardList } from './components/card-list/card-list.component.jsx';
import  { SearchBox } from './components/search-box/search-box.component';
import './App.css';

  class App extends Component {
    constructor() {
      super();
      this.state = {
        players:[],
        searchField:''
      }
    }

    componentDidMount() {
      fetch('https://liga1-db.herokuapp.com/jucatori')
      .then(response => response.json())
      .then(jucatori=> this.setState({ players: jucatori }));
    }

    handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

    render() {
      const { players, searchField } = this.state;
    
    const filteredPlayers = players.filter(player =>
      player.fullName.toLowerCase().includes(searchField.toLowerCase())
      );
   
      return (
      <div className="App">
      <h1>Liga  1 App</h1>
      <SearchBox
              placeholder='search players'
              handleChange={this.handleChange}
             />
        <CardList players={filteredPlayers} />
      </div>
    );
   }
 }

export default App;
