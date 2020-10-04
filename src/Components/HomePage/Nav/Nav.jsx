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
      <button onClick={props.getMenu} className={c.nav_menu} >
        <img src="/images/menu.png" alt="foto"/>
      </button> 
      <div className={c.nav_bar} id='nav'>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/servises">Услуги</NavLink>
        <NavLink to="/calculator">Калькулятор</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </div>
      <div className={c.phone}>
        <img className={c.phone_img}src="/images/phone.png" alt=""/>
        <div className={c.nav_phone}>+375 29 642-91-85</div>
      </div> 
    </div>
  );
};

export default Nav;