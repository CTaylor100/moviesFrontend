import React from 'react';

const Show = (props) => {
    const movie = props.movie
    return (
        <div>
            <h3>{movie.title}</h3>
            <h5>{movie.year}</h5>
            <img src={movie.poster_url} />
        </div>
    )
}

export default Show;