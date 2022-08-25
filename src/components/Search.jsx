import React from 'react'

const Search = ({ setSearchParams }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.search.value;
        setSearchParams(value)
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <input type="search"
                        name='search'
                        placeholder='Search'
                    />
                    <input className='btn'
                        style={{ position: "absolute", top: 0, right: 0 }}
                        type='submit'
                        onSubmit={handleSubmit}
                        value='Search'
                    />
                </form>

            </div>
        </div>
    )
}

export default Search