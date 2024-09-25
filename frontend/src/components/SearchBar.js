export default function SearchBar({ onSearchChange, onSearchSubmit,varname }) {
    return (
        <form className="d-flex mb-3" role="search" onSubmit={onSearchSubmit}>
            <input
                className="form-control me-2"
                type="search"
                value={varname}
                placeholder="Search"
                aria-label="Search"
                onChange={onSearchChange} 
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}
