import { Link } from "react-router-dom";
import "./Landingpage.css";

const Landingpage = () => {
    return (
        <section className="landing-container">
            <div className="landing-food">
                <img src="./public/foodillustration.svg" alt="FLYING FOOD" />
            </div>
            <div className="landing-box">
                <h2 className="landing-title">All recipe you needed</h2>
                <p className="landing-text">5000+ healthy recipes made by people for a healthy life</p>
                <button className="landing-btn"><Link to="/home">Get Started</Link></button>
            </div>
        </section>
    );
}
 
export default Landingpage;