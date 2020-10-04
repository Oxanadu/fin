import React from "react";
import c from "./Button.module.css";

const Button = (props) => {
  const buttonCreate = props.state.img.map((item, index) => { // map формирует div
    let url;
    if (props.state.state[index] === true) url = `/images/${item}.png`;
    else url = `/images/${item}1.png`;

    return (
      <div onClick={props.changePage} className={c.button_item} id={index} key={index}>
        <img src={url} alt="" />
        <span className={c.span}>{props.state.services[index]}</span>
      </div>
    );
  });

  return <div className={c.button}>{buttonCreate}</div>; // отрисовка сформированных map div
};

export default Button;
