import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./BackHeader.css";
import { Link } from "react-router-dom";

const BackHeader = (props) => {
  return (
    <>
      <div className="back-title-container">
        <Link to="/home">
          <ArrowBackIcon />
        </Link>
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default BackHeader;
