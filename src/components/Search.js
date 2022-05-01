import React from "react";

const Search = () => {
    const [searchTerm, setSearch] = React.useState("")

    // event handler fun
    const handleChange = (event) => {
        setSearch(event.target.value)
    };

    return (
    <div>
        <div className="searchbar">
        <label htmlFor="search">Search : </label>
        <input id="search" type="text" onChange={handleChange} />
        </div>
        
        <p>
            Searching for <strong className="searchTerm">{searchTerm}</strong> ...
        </p>
    </div>
    );
};

export default Search;
