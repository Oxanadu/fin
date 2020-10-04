import React from "react";
import c from "./Outsourcing.module.css";
import Wraplarge from "./Wraplarge";
import Wrapsmall from "./Wrapsmall";

const Content = (props) => {
  return (
    <div className={c.container}>
      <Wraplarge
        state={props.state} 
      />
      <Wrapsmall
        state={props.state}
        changeImg={props.changeImg}
      />
    </div>
  );
};

export default Content;
