import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Movie from './components/Movie';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';


class App extends Component {
  // https://api.themoviedb.org/3/movie/550?api_key=f782a6e83bfca41811cea57d88703694
  // https://api.themoviedb.org/3/discover/movie?api_key=f782a6e83bfca41811cea57d88703694&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

  // default data
  state = {
    movies: [],
  }

  async componentDidMount() {
    try{
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=f782a6e83bfca41811cea57d88703694&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();

      this.setState({
        movies: movies.results
      });

    } catch (e){
      console.log(e)
    }
  }

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
        <Link to="/">
          <img src={logo} alt=""/>
        </Link>          
        </header>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>        
      </div>
      </Router>
    );
  }
}

export default App;
