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
            body: JSON.stringify(formMovie),
            headers: {
                "Content-Type":"application/json"
            }
        })
        props.getMovies()
        props.history.push('/movies')
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        await fetch(props.url + '/movies/' + formMovie.id, {
            method: 'PUT',
            body: JSON.stringify(formMovie),
            headers: {
                "Content-Type":"application/json"
            }
        })
        props.getMovies()
        props.history.push('/movies')
    }

    const action = (props.type === 'new') ? handleCreate : handleEdit ;

    
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