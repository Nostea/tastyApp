import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../../Components/Searchbar/Searchbar";
import "./Area.css";
import Footer from "../../Components/Footer/Footer";
import BackHeader from "../../Components/BackHeader/BackHeader";
const Area = () => {
  const [area, setArea] = useState([]);
  const [mainAreaData, setMainAreaData] = useState([]);
  const { areas } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areas}`)
      .then((res) => res.json())
      .then((data) => setArea(data.meals))
      .catch((error) => console.error("Fehler :-(", error));
  }, [areas]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setMainAreaData(data))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);

  return (
    <section className="area-page">
      <BackHeader title="Search" />
      <Searchbar />
      <div className="areas-filter-buttons">
        {mainAreaData?.meals ? (
          mainAreaData?.meals.map((item, index) => (
            <Link to={`/area/${item.strArea}`} key={index}>
              <button className="button-tags">{item.strArea}</button>
            </Link>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </div>
      <div className="fcs-grid">
        {area ? (
          area.map((item, index) => (
            <section className="fcs-container" key={index}>
              <div className="areas">
                <Link key={index} to={`/details/${item.idMeal}`}>
                  <div className="fcs-image">
                    <img src={item.strMealThumb} alt="category IMG" />
                  </div>
                  <div className="fcs-name">
                    <p>{item.strMeal}</p>
                  </div>
                </Link>
              </div>
            </section>
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Area;
