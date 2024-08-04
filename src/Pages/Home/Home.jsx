import "./Home.css";
import MealOfTheDay from "../../Components/MealOfTheDay/MealOfTheDay";
import Areas from "../../Components/Areas/Areas";
import Categories from "../../Components/Categories/Categories";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
      <section className="home-wrap">
        <Searchbar />
        <MealOfTheDay />
        <Areas />
        <Categories />
        <Footer />
      </section>
  );
};

export default Home;
