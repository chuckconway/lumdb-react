import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './components/Movie';

const movies = [
  {
    id:1,
    title:'Superman'
  },
  {
    id:2,
    title:'Star Wars'
  },
  {
    id:3,
    title:'Batman'
  }

]

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt=""/>
        </header>
        {movies.map((movie) =>  <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
