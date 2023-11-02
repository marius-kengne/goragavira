import React from 'react';

const SearchComponent = () => {
 return (
        <header className="App-header">
            <h1>GeeksforGeeks Shopping Cart</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for GFG Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
};

export default SearchComponent;