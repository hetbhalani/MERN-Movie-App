import React, { useState, useEffect } from 'react';
import { useSearch } from '../SearchContext';

const api_key = process.env.API_KEY;
export default function Card ()  {
    const { searchTerm } = useSearch();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(api_key + {searchTerm});
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

    const finalData = data.map((obj) => (
        <div className='col col-4' key={obj.imdbID}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={obj.Poster} className="card-img-top" alt={obj.Title} />
                <div className="card-body">
                    <h5 className="card-title">{obj.Title}</h5>
                    <p className="card-text">{obj.Year}</p>
                    <button className="btn btn-primary">Add to Watchlist</button>
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