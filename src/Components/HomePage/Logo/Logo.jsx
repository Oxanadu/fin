import React from 'react';
import c from './Logo.module.css'


const Logo = (prpos) => {
    return (
            <div className={c.logo}>
                <img className="logo_img" src="/images/logo1.png" alt="Логотип" />
            </div> 
    )
}

export default Logo