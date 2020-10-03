import React from "react";
import c from "./Outsourcing.module.css";

const Wrapsmall = (props) => {
  let servise = props.state.imgSmall1;
  let id = props.state.id[0];
  switch (true) {
    case props.state.state[0]:
      servise = props.state.imgSmall1;
      id = props.state.id[0]
      break;
    case props.state.state[1]:
      servise = props.state.imgSmall2;
      id = props.state.id[1]
      break;
    case props.state.state[2]:
      servise = props.state.imgSmall3;
      id = props.state.id[2]
      break;
    default:
      console.log("errror");
  }
  
  let getServiseImg = servise.map ((value, index) => {
 
    return(
      <div onClick={props.changeImg}  className="sliders" id={id+(index+1)} key={value}>
          <img src={`/images/${value}.jpg`} alt=""  />
        </div>
    )
    
  })

  return (
      <div className={c.sliders_small_block}>
       {getServiseImg}
      </div>
     );
};

export default Wrapsmall;
