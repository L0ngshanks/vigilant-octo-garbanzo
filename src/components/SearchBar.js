import React, { useState } from 'react'

const SearchBar = ( { onFormSubmit } ) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // TODO: add call to callback from parent
        onFormSubmit(term)
    }

    return (
        <div className="ui segment search-bar">
            <form onSubmit={onSubmit} className='ui form'>
                <div className='field'>
                    <label>Video Search</label>
                    <input
                        type='text'
                        placeholder='Enter search term here...'
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value);
                        }}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;