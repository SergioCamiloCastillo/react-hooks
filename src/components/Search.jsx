import React from 'react'

export default function Search({search, searchInput, handleSearch}) {
    return (
        <div>
            <div className="Search">
                <input type='text' value={search} ref={searchInput} onChange={handleSearch}></input>
            </div>
        </div>
    )
}
