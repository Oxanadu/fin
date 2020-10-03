import React from "react";



const Steps = (props) => {
    
    return (
        
        <div className="steps">
            <div onMouseOver={props.slideChange} className="step" id="0"></div>
            <div onMouseOver={props.slideChange} className="step" id="1"></div>
            <div onMouseOver={props.slideChange} className="step" id="2"></div>
            <div onMouseMove={props.slideChange} className="step" id="3"></div>
            <div onMouseMove={props.slideChange} className="step" id="4"></div>
        </div>
    )
}

export default Steps
