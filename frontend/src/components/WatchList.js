import React, {useState,useEffect} from "react";
import axios from "axios";


export default function Watchlist() {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        fetchWatchlist();
    }, []);

    const fetchWatchlist = async () => {
        try {
            const response = await axios.get('http://localhost:3690/watchlist');
            setWatchlist(response.data);
        } catch (error) {
            console.error("Error fetching watchlist:", error);
        }
    };

    const deleteCard = async (imdbID) =>{
        try {
            const response = await axios.delete(`http://localhost:3690/watchlist/${imdbID}`);
            setWatchlist(watchlist.filter(movie => movie.imdbID !== imdbID));
            //khali eva j movie batave jeni imdbID delete vada imdbID jevi na hoi
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container mt-3'>
            <h2>My Watchlist</h2>
            <div className='row mt-3'>
                {watchlist.map((movie) => (
                    <div className='col col-4 mt-3' key={movie.imdbID}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.Title}</h5>
                                <p className="card-text">{movie.Year}</p>
                                <button className="btn btn-outline-success" onClick={() => deleteCard(movie.imdbID)}>Watched</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}