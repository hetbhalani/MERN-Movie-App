import React, { useState, useEffect } from 'react';
import { useSearch } from '../SearchContext';
import axios from 'axios';

export default function Card ()  {
    const { searchTerm } = useSearch();
    const [data, setData] = useState([]);

    const fetchData = async () => {
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
        fetchData();
    }, [searchTerm]);

    const addToWatchlist = async (movie) => {
        try {
            const response = await axios.post('http://localhost:3690/watchlist', movie);
            if (response.status === 200) {
                alert('Added to watchlist successfully!');
            }
        } catch (error) {
            console.error("Error adding to watchlist:", error);
            alert('Failed to add to watchlist. Please try again.');
        }
    };
    const finalData = data.map((obj) => (
        <div className='col col-4 mt-3' key={obj.imdbID}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={obj.Poster} className="card-img-top" alt={obj.Title} />
                <div className="card-body">
                    <h5 className="card-title">{obj.Title}</h5>
                    <p className="card-text">{obj.Year}</p>
                    <button className="btn btn-primary" onClick={() => addToWatchlist(obj)}>Add to Watchlist</button>
                </div>
            </div>
        </div>
    ));

    return (
        <div className='container mt-3'>
            <div className='row'>{finalData.length > 0 ? finalData : <p>No results found.</p>}</div>
        </div>
    );
};