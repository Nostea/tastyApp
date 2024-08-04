import "./Searchbar.css";
import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const Searchbar = () => {
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const handleFocus = () => {
    setPlaceholderVisible(false);
  };
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // ! Search All Meals
  useEffect(() => {
    if (searchInput) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
      )
        .then((res) => res.json())
        .then((data) => setSearchData(data.meals))
        .catch((err) => console.log("Fehler beim Laden der API", err));
    } else {
      setSearchData([]);
    }
  }, [searchInput]);

  return (
    <section className="searchbar">
      <div className="searchbar-box">
        <SearchIcon />
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          name="searchbar"
          type="text"
          value={searchInput}
          autoComplete="off"
          onFocus={handleFocus}
          placeholder={placeholderVisible ? "Search" : ""}
        />
        <div className="suggestions">
          {searchData &&
            searchData.length > 0 &&
            searchData.slice(0, 5).map((meal) => (
              <Link key={meal.idMeal} to={`/details/${meal.idMeal}`}>
                {meal.strMeal}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
