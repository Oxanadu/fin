import React from "react";
import Outsourcing from "./ServicesSlide/Outsourcing/Outsourcing";
import Button from "./ServicesSlide/Button/Button";
import Nav from "../HomePage/Nav/Nav";
import Logo from "../HomePage/Logo/Logo";
import c from "./Services.module.css";

const Services = (props) => {
  return (
    <div className={c.sliders}>
      <div className={c.nav_wrap}>
        <Logo />
        <Nav state={props.state} getMenu={props.getMenu}/>
      </div>
      <Button state={props.state} changePage={props.changePage} />
      <Outsourcing
        state={props.state}
        changePage={props.changePage}
        serviseGive={props.serviseGive}
        changeImg={props.changeImg}
      />
    </div>
  );
};

export default Services;
