import "./Search.css";
import FoodCardLarge from "./../../Components/FoodCardLarge/FoodCardLarge";
import Footer from "../../Components/Footer/Footer";
import SearchbarTwo from "../../Components/SearchbarTwo/SearchbarTwo";
import { useState } from "react";
import BackHeader from "../../Components/BackHeader/BackHeader";

const Search = () => {
  const [searchData, setSearchData] = useState([]);

  return (
    <section className="page-wrapper">
      <BackHeader title="Search" />
      <SearchbarTwo setSearchData={setSearchData} />
      {searchData?.map((foodcard, key) => (
        <FoodCardLarge key={key} data={foodcard} />
      ))}
      <Footer />
    </section>
  );
};

export default Search;
