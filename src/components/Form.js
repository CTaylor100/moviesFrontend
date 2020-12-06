import React from 'react';

const Form = (props) => {


    const [formMovie, setFormMovie] = React.useState(props.movie);

    const handleChange = (e) => {
        setFormMovie({...formMovie, [e.target.id]: e.target.value})
    }

    const handleCreate = async (e) => {
        e.preventDefault()
        await fetch(props.url + '/movies', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formMovie)
        })
        props.getMovies()
        props.history.push('/movies')
    }

    const action = (props.type === 'new') ? handleCreate : null;

    
    return (
        <form onSubmit={action}>
            <input
                type='text'
                id='title'
                onChange = {handleChange}
                value = {formMovie.title}
                placeholder='Movie Title'
            /><br/>
            <input
                type='text'
                id='poster_url'
                onChange = {handleChange}
                value = {formMovie.poster_url}
                placeholder='Poster Image URL'
            /> <br/>
            <input
                type='number'
                id='year'
                onChange = {handleChange}
                value = {formMovie.year}
                placeholder='Release Year'
            /><br/>
            
            <input type='submit' value='Update' />
        </form>
    )
}

export default Form;