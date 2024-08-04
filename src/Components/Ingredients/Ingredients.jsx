import "./Ingredients.css";

const Ingredients = (props) => {
  return (
    <>
      {props.measurement?.trim().length > 0 ? (
        <p className="ingredient-tag">
          {props.measurement} {props.ingredient}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default Ingredients;
