import "./FoodCardLarge.css";
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FoodCardLarge = (props) => {
    const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.data.idMeal}`)
      .then((res) => res.json())
      .then((data) => setFoodData(data.meals))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, []);

    console.log(props.data);
    return (
            <section className="fcl-container">
                <div className="fcl-image">
                    <img src={props.data.strMealThumb} alt="FOOD IMAGE" />
                </div>
                <div className="fcl-infos">
                    <h2>{props.data.strMeal.length > 26 ? props.data.strMeal.substring(0, 26) + "..." : props.data.strMeal}</h2>
                    <p><CircleIcon style={{ color: "#70b9be" }}/> {foodData[0]?.strCategory}</p>
                </div>
                <div className="fcl-btn">
                    <Link to={`/details/${props.data.idMeal}`}><ArrowForwardIcon style={{ color: "white" }}/></Link>
                </div>
            </section>
    );
}
 
export default FoodCardLarge;