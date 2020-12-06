import './App.css';
import React from 'react';

const baseURL = 'http://localhost:3000';
console.log('Current Base URL:', baseURL);

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
    <h1>Testing</h1>
  );
}

export default App;
