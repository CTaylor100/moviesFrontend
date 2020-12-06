import './App.css';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

//Component Files
import Display from './components/Display.js';
import Form from './components/Form.js';

const baseURL = 'http://localhost:3000';
console.log('Current Base URL:', baseURL);

const blankMovie = {
  title: '',
  year: 0,
  poster_url: ''
}

const App = (props) => {
  const [movies, setMovies] = React.useState([])

  const getMovies = async () => {
    const res = await fetch(baseURL + '/movies');
    const data = await res.json();
    setMovies(data);
    console.log(movies)
  }

  React.useEffect(() => { getMovies() }, []);

  return (
    <div>
      <h1>Tis The Season</h1>
      <Link to='/movies'>
        <button>HOME</button>
      </Link>
      <Link to='/movies/new'>
        <button>NEW</button>
      </Link>
      <Switch>
        <Route 
          exact
          path='/movies' 
          render = { (rp) => 
            <Display {...rp} url={baseURL} getMovies={getMovies} movies={movies} />
            }
        />
        <Route
          exact
          path='/movies/new'
          render = { (rp) => 
            <Form {...rp} type='new' url={baseURL} movie={blankMovie} getMovies={getMovies}/>
          }
        />
      </Switch>

    </div>
  );
}

export default App;
