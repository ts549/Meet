import './SearchBar.css';
import { useState } from 'react';

function SearchBar() {

    const [searchInput, setSearchInput] = useState("");
    
    const universities = ["Purdue University", "Babson College"];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
      
    if (searchInput.length > 0) {
        universities.filter((university) => {
            return university.match(searchInput);
        });
    }

    return (
        <input className="SearchBar" type="text" placeholder="Search Here" onChange={handleChange} value={searchInput} />
    );
}

export default SearchBar;