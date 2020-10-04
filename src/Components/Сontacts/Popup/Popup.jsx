import React from 'react';
import { NavLink } from "react-router-dom";
import c from './Popup.module.css'

const Popup = (props) => {
       
    return (
        <div className={c.popup} id="send">
            <NavLink to="/contacts">
                <div onClick={props.messegeSend} className={c.popup_close}></div> 
            </NavLink>           
            <div className={c.popup_text}>
                Спасибо! Ваше сообщение отправлено!
            </div>
        </div>
    )
}


export default Popup