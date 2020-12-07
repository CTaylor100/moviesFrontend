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
        <div className="flex">
            {movies.map(movie => (
            <div className='movieCard' key={movie.id}>
                <div className='title'>
                    <h4>{movie.title}</h4>
                </div>                    
                <h6>{movie.year}</h6>
                <img src={movie.poster_url} 
                    onClick={() => {
                        props.getMovie(movie);
                        props.history.push(`/movies/${movie.id}`) 
                    }} />
                <div>
                    <button onClick={() => {
                        props.getMovie(movie);
                        props.history.push(`/movies/edit/${movie.id}`)
                    }}>Edit</button>
                    <button onClick={() => deleteMovie(movie)}>Delete</button>
                </div>
            </div>
            ))}
        </div>
    )
    
    return movies.length > 0  ? loaded() : <h3>Loading...</h3>;
}

export default Display;