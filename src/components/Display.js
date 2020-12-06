import React from 'react';

const Display = (props) => {
    const movies = props.movies;

    const deleteMovie = async (movieToDelete) => {
        await fetch(props.url + '/movies/' + movieToDelete.id, {
            method: 'delete'
        })
        props.getMovies();
    }

    const loaded = () => (
        <div>
            {movies.map(movie => (
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <h5>{movie.year}</h5>
                <img src={movie.poster_url} />
                <button onClick={() => deleteMovie(movie)}>Delete</button>
            </div>
            ))}
        </div>
    )
    
    return movies.length > 0  ? loaded() : <h3>Loading...</h3>;
}

export default Display;