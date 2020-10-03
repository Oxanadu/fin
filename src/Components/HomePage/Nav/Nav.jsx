import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import c from "./Nav.module.css";

const Nav = (props) => {
  const ref = useRef();

  useEffect(() => {
    let start = () => {
      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.marginLeft = 0;
                
      }, 500);
    };
    start();
  });
  return (
    <div ref={ref} className={c.nav}>
      <div className={c.nav_bar}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/servises">Услуги</NavLink>
        <NavLink to="/calculator">Калькулятор</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </div>
    </div>
  );
};

export default Nav;