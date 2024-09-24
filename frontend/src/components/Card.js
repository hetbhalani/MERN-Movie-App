import React, { useState, useEffect } from 'react';

const Card = () => {
    const [data, setData] = useState([]);
    const [varname, setVarname] = useState("batman");

    const fetchData = async (searchTerm) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=14d435fd&s=${searchTerm}`);
            const result = await response.json();
            if (result.Search) {
                setData(result.Search);
            } else {
                setData([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData(varname); // Fetch data when the component mounts or varname changes
    }, [varname]);

    const SearchChange = (obj) => {
        setVarname(obj.target.value); // Update search term on input change
    };

    const SearchSubmit = (obj) => {
        obj.preventDefault(); // Prevent default form submission
        fetchData(varname);   // Fetch data on form submit
    };

    const finalData = data.map((obj) => (
        <div className='col col-4' key={obj.imdbID}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={obj.Poster} className="card-img-top" alt={obj.Title} />
                <div className="card-body">
                    <h5 className="card-title">{obj.Title}</h5>
                    <p className="card-text">{obj.Year}</p>
                    <a href="#" className="btn btn-primary">Watch Now</a>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <SearchBar onSearchChange={SearchChange} onSearchSubmit={SearchSubmit} />
            <div className='container'>
                <div className='row'>{finalData.length > 0 ? finalData : <p>No results found.</p>}</div>
            </div>
        </div>
    );
};

// Exporting the Card component as default
export default Card;

export function SearchBar({ onSearchChange, onSearchSubmit }) {
    return (
        <form className="d-flex mb-3" role="search" onSubmit={onSearchSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={onSearchChange} // Correctly handle input changes
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}
