import React, { Component } from 'react';
 // import Movie from './Movie';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  // https://api.themoviedb.org/3/movie/550?api_key=f782a6e83bfca41811cea57d88703694
  // https://api.themoviedb.org/3/discover/movie?api_key=f782a6e83bfca41811cea57d88703694&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

  // default data
  state = {
    movie: {},
  }


  async componentDidMount() {
    try{
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=f782a6e83bfca41811cea57d88703694&language=en-US`);
      const movie = await res.json();

      this.setState({
        movie: movie
      });

    } catch (e){
      console.log(e)
    }
  }

  render() {
    return (
      <div>
          <img src={`${POSTER_PATH}${this.state.movie.backdrop_path}`} alt={this.state.movie.title} />
          <img src={`${BACKDROP_PATH}${this.state.movie.poster_path}`} alt={this.state.movie.title} />
          <h1>{this.state.movie.title}</h1>
          <h3>{this.state.movie.release_date}</h3>
          <p>{this.state.movie.overview}</p>
        {/* {this.state.movies.map((movie) =>  <Movie key={movie.id} movie={movie} />)} */}
      </div>
    );
  }
}

export default MovieDetail;

