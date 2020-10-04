import React, { useEffect, useRef } from 'react';
import Nav from '../HomePage/Nav/Nav'
import Logo from '../HomePage/Logo/Logo'
import Calcit from './Calcit'
import Calctime from './Calctime'
import c from './Calculator.module.css'

const Calculator = (props) => {
    let ref = useRef();  //hook для изменения стиля
    useEffect (() => {
        ref.current.style.transform =  'rotateY(180deg)';
    })

    return (
        <div className={c.calculator}>
            <Logo />
            <div  className={c.image}>
                <div ref={ref} className={c.box} id="calcImg">
                    <div className={c.front}></div>
                    <div className={c.back}></div>
                </div>
            </div>
            <Nav state={props.state} getMenu={props.getMenu} />
            <div className={c.calc}>
                <Calcit state={props.state} mouseCalc={props.mouseCalc} getPrice={props.getPrice}/>
                <Calctime state={props.state} mouseCalc={props.mouseCalc} getPrice={props.getPrice}/>
            </div>    
        </div>
    )
}

export default Calculator