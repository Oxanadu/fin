import React from "react";
import {
  textOutsourcing,
  textAccessControl,
  textVideoAnalitics,
} from "../../../../text";
import c from "./Outsourcing.module.css";

const Wraplarge = (props) => {
 
  let serv = textOutsourcing;
  switch (true) {
    case props.state.state[0]:
      serv = textOutsourcing;
           break;
    case props.state.state[1]:
      serv = textAccessControl;
      
      break;
    case props.state.state[2]:
      serv = textVideoAnalitics;
     
      break;
    default:
      console.log("errror");
  }

  
  return (
    <div className={c.sliders_wrap_large}>
      <div className={c.content}>
      <h2 className={c.servises_title}>{serv.titleHome[props.state.textStart]}</h2> 
      <span className={c.servises_content}>{serv.textDiscr[props.state.textStart]}</span>
        
      </div>

      <div className={c.sliders_large_block}>
      <img src={`/images/${props.state.imgStart}.jpg`} alt=""/>
      </div>
    </div>
  );
};

export default Wraplarge;
