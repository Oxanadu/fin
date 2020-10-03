import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import c from "./Navburger.module.css";

const Navburger = (props) => {
    return (
    <div ref={ref} className={c.nav}>
      <div className={c.nav_burger}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/servises">Услуги</NavLink>
        <NavLink to="/calculator">Калькулятор</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </div>
    </div>
  );
};

export default Navburger;