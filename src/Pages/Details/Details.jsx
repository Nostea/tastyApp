import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Ingredients from "../../Components/Ingredients/Ingredients";
import "./Details.css";
import { Link, useParams } from "react-router-dom";
const Details = () => {
  const [detailData, setDetailData] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDetailData(data.meals))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, []);

  console.log(detailData);
  const { id } = useParams();

  return (
    <>
      {detailData ? (
        detailData.map((item, index) => (
          <section className="detailsFood" key={index}>
            <div>
              <img src={item.strMealThumb} alt="" />
            </div>
            <div className="detailsFoodContainer">
              <h2>{item.strMeal}</h2>
              <p className="p-title">{item.strCategory}</p>
              <p className="p-subtitle">{item.strArea}</p>
              {/* Hier habe ich deine Buttons gebaut, mit einem State. Damit habe ich den Switch gemacht und das Styling habe ich auch schon gemacht, kannst du noch anpassen wenn du willst.*/}
              <div className="buttonCluster">
                <button
                  className={`detail-btn ${
                    showInstructions === false ? "active" : ""
                  }`}
                  onClick={() => setShowInstructions(false)}
                >
                  Ingredients
                </button>
                <button
                  className={`detail-btn ${
                    showInstructions === true ? "active" : ""
                  }`}
                  onClick={() => setShowInstructions(true)}
                >
                  Instruction
                </button>
              </div>
              {showInstructions === false ? (
                <div className="ingredients">
                  <h3>Ingredients</h3>
                  <Ingredients
                    measurement={item.strMeasure1}
                    ingredient={item.strIngredient1}
                  />
                  <Ingredients
                    measurement={item.strMeasure2}
                    ingredient={item.strIngredient2}
                  />
                  <Ingredients
                    measurement={item.strMeasure3}
                    ingredient={item.strIngredient3}
                  />
                  <Ingredients
                    measurement={item.strMeasure4}
                    ingredient={item.strIngredient4}
                  />
                  <Ingredients
                    measurement={item.strMeasure5}
                    ingredient={item.strIngredient5}
                  />
                  <Ingredients
                    measurement={item.strMeasure6}
                    ingredient={item.strIngredient6}
                  />
                  <Ingredients
                    measurement={item.strMeasure7}
                    ingredient={item.strIngredient7}
                  />
                  <Ingredients
                    measurement={item.strMeasure8}
                    ingredient={item.strIngredient8}
                  />
                  <Ingredients
                    measurement={item.strMeasure9}
                    ingredient={item.strIngredient9}
                  />
                  <Ingredients
                    measurement={item.strMeasure10}
                    ingredient={item.strIngredient10}
                  />
                  <Ingredients
                    measurement={item.strMeasure11}
                    ingredient={item.strIngredient11}
                  />
                  <Ingredients
                    measurement={item.strMeasure12}
                    ingredient={item.strIngredient12}
                  />
                  <Ingredients
                    measurement={item.strMeasure13}
                    ingredient={item.strIngredient13}
                  />
                  <Ingredients
                    measurement={item.strMeasure14}
                    ingredient={item.strIngredient14}
                  />
                  <Ingredients
                    measurement={item.strMeasure15}
                    ingredient={item.strIngredient15}
                  />
                  <Ingredients
                    measurement={item.strMeasure16}
                    ingredient={item.strIngredient16}
                  />
                  <Ingredients
                    measurement={item.strMeasure17}
                    ingredient={item.strIngredient17}
                  />
                  <Ingredients
                    measurement={item.strMeasure18}
                    ingredient={item.strIngredient18}
                  />
                  <Ingredients
                    measurement={item.strMeasure19}
                    ingredient={item.strIngredient19}
                  />
                  <Ingredients
                    measurement={item.strMeasure20}
                    ingredient={item.strIngredient20}
                  />
                </div>
              ) : (
                <>
                  <div className="instructions">
                    <h3>Instructions</h3>
                    <p>{item.strInstructions}</p>
                  </div>
                  <div>
                    <Link to={item.strYoutube}>
                      <button className="button-vid">Video</button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </section>
        ))
      ) : (
        <p>Loading...</p>
      )}

      <Footer />
    </>
  );
};

export default Details;
