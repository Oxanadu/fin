import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "./Slider/Slider";
import Nav from "./Nav/Nav";
import c from "./HomePage.module.css";
import Logo from "./Logo/Logo";
import Steps from "./Steps/Steps"

const HomePage = (props) => {
  return (
    <div className={c.home_page}>
      <Logo />
      <Nav />
      <div className="nav_phone"></div>
      <Slider state={props.state} sliderBegin={props.sliderBegin}/>
      <NavLink to="/servises">
          <button className={c.button}>Подробнее</button>
      </NavLink>
      <Steps state={props.state} slideChange={props.slideChange} />
    </div>
        
  );
};

export default HomePage;
