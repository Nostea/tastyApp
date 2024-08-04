import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
const SearchbarTwo = (props) => {
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  const handleFocus = () => {
    setPlaceholderVisible(false);
  };

  const [searchInput, setSearchInput] = useState("");

  // ! Search Category
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((res) => res.json())
      .then((data) => props.setSearchData(data.meals))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, [searchInput]);

  return (
    <section className="searchbar">
      <div className="searchbar-box">
        <SearchIcon />
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          name="searchbar"
          type="text"
          autoComplete="off"
          value={searchInput}
          onFocus={handleFocus}
          placeholder={placeholderVisible ? "Search" : ""}
        />
      </div>
    </section>
  );
};

export default SearchbarTwo;
