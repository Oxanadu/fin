import React, { useEffect } from "react";
import c from "./Outsourcing.module.css";
import Content from "./Content";

const Outsourcing = (props) => {
  useEffect(() => props.serviseGive(props.state.imgEnd));

  return (
    <div className={c.sliders} id="outsorsing">
      <Content
        state={props.state}
        changePage={props.changePage}
        serviseGive={props.serviseGive}
        changeImg={props.changeImg}
      />
    </div>
  );
};

export default Outsourcing;
