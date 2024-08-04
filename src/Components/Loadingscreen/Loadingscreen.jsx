import "./Loadingscreen.css";
import { useContext, useEffect } from "react";
import { LoadingContext } from './../../Context/Context';

const Loadingscreen = () => {
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    }, []);
  
    return (
      <section className="loading-bg">
        <p className="loading-title">TASTY</p>
        <div className="loader"></div>
      </section>
    );
  };
 
export default Loadingscreen;