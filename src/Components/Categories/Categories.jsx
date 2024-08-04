// category = cat
// <Categories ImgURL="https://picsum.photos/500/300/" Category="Beef" />
import { useEffect, useState } from "react";
import SeeAll from "../SeeAll/SeeAll";
import "./Categories.css";
import { Link } from "react-router-dom";
const Categories = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((categoryData) => setCategory(categoryData))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);

  return (
    <>
      <section className="cat-section">
        <div className="cat-title-flex">
          <h2>Categories</h2>

          <SeeAll />
        </div>
        <div className="cat-card-container">
          {category?.categories.length > 0 ? (
            category?.categories.map((item, index) => (
              <div key={index} className="cat-card">
                <Link to={`/categorie/${item.strCategory}`}>
                  <img src={item.strCategoryThumb} alt="category IMG" />
                  <p>{item.strCategory}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;
