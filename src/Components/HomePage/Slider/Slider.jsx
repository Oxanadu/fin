import React, { useEffect} from "react";
import c from "./Slider.module.css";

const Slider = (props) => {
  useEffect(() => {
    props.sliderBegin()
  })
  

  return (
    <div className={c.slider}>
      <div className={c.section_sliders}>
        <div  className={c.block_sliders} id="slide">
          <div className={c.block_slider1}></div>
          <div className={c.block_slider2}></div>
          <div className={c.block_slider3}></div>
          <div className={c.block_slider4}></div>
          <div className={c.block_slider5}></div>
        </div>
      </div>
      <div className={c.content} >
          <h2 id="text"></h2>
          <span id="text2"></span>
       </div>
    </div>
  );
};

export default Slider;
