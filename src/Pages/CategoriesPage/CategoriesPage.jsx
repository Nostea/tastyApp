import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CategoriesPage.css";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";
import BackHeader from "../../Components/BackHeader/BackHeader";

const CategoriesPage = () => {
  const [category, setCategory] = useState([]);
  const [mainCategoryData, setMainCategoryData] = useState([]);
  const { categories } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`)
      .then((res) => res.json())
      .then((categoryData) => setCategory(categoryData.meals))
      .catch((error) => console.error("Fehler :-(", error));
  }, [categories]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMainCategoryData(data))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);

  console.log(category);

  return (
    <>
      <BackHeader title="Search" />
      <Searchbar />
      <section className="categories-page">
        <div className="areas-filter-buttons">
          {mainCategoryData?.categories ? (
            mainCategoryData?.categories.map((item, index) => (
              <Link to={`/categorie/${item.strCategory}`} key={index}>
                <button className="button-tags">{item.strCategory}</button>
              </Link>
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
        <div className="fcs-grid">
          {category ? (
            category.map((item, index) => (
              <section className="fcs-container">
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
      </section>
      <Footer />
    </>
  );
};

export default CategoriesPage;
