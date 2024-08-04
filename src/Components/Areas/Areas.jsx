import { useEffect, useState } from "react";
import SeeAll from "../SeeAll/SeeAll";
import "./Areas.css";
import { Link } from "react-router-dom";

const Areas = () => {
  const [area, setArea] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((areaData) => setArea(areaData))
      .catch((error) => console.error("Fehler :-(", error));
  }, []);
  return (
    <>
      <section className="areas-section">
        <div className="areas-title-flex">
          <h2>Areas</h2>

          <SeeAll />
        </div>
        <div className="areas-filter-buttons">
          {area?.meals.length > 0 ? (
            area?.meals.map((item, index) => (
              <Link key={index} to={`/area/${item.strArea}`}>
                <button className="button-tags">{item.strArea}</button>
              </Link>
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Areas;
