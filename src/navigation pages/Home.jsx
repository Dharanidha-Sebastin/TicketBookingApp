import React from "react";
import HomeFooter from "../home_components/HomeFooter";
import HomeHeader from "../home_components/HomeHeader";
import ImgSlider from "../home_components/ImgSlider";
import "../css/home_components_css/Home.css";
import Topdestination from "../home_components/Topdestination";
import NewsBoard from "../home_components/NewsBoard";
import FormSearch from "../home_components/FormSearch";

const Home = () => {
  return (
    <div className="main">
      {/* <div>MAIN HOME PAGE</div> */}
      <HomeHeader />
      {/* <Link to="/TicketStatus">
        <button>TicketStatus</button>
      </Link>
      <div>
        <button>footer</button>
      </div> */}

      <div className="home-container">
        <div className="slider">
          <marquee>
            "Online Reservation Toll Free Number: 08066006572 / 9513948001."
          </marquee>
        </div>
        <div className="row">
          <FormSearch />
          <ImgSlider />
        </div>
        <Topdestination />
        <NewsBoard />
        <HomeFooter />
      </div>
    </div>
  );
};

export default Home;
