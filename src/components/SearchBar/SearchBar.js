import React from "react";
import "./SearchBar.css"


export const SearchBar = (props) => {

    const { searchResult, setSearchResult } = props.data

    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="Search"
                value={searchResult}
                onChange={(e) => setSearchResult(e.target.value)}
            />
        </div>
    )
}
