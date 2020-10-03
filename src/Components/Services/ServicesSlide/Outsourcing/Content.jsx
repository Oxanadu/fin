import React from "react";
import c from "./Outsourcing.module.css";
import Wraplarge from "./Wraplarge";
import Wrapsmall from "./Wrapsmall";

const Content = (props) => {
  return (
    <div className={c.container}>
      <Wraplarge
        state={props.state}
        changePage={props.changePage}
        serviseGive={props.serviseGive}
      />
      <Wrapsmall
        state={props.state}
        changePage={props.changePage}
        serviseGive={props.serviseGive}
        changeImg={props.changeImg}
      />
    </div>
  );
};

export default Content;
