import React from 'react';
import c from './Calcit.module.css'

const Calcit = (props) => {
    return (
        <div onMouseOver={props.mouseCalc} className={c.calcit} id="imgCalcCit">
            <div  className={c.title }>
                Калькулятор стоимости поддержки
            </div>
            <div className={c.amount_comp}>
                <div className={c.calc_text}>
                    Количество пользователей
                </div>
                <input className={c.input_comp} type="text" name ="number" id="comp1"/>
            </div>
            <div className={c.amount_serv}>
                <div className={c.serv_text}>
                    Количество серверов
                </div> 
                <input className={c.input_serv} type="text" name ="number" id="serv1"/>
            </div>
            <div className={c.result}>
                <div className={c.result_text}>
                    {props.state.priceIt[1]}руб
                </div> 
                <button onClick={props.getPrice} className={c.sum_btn} id="button1">Рассчитать</button>
            </div>
        </div>
    )
}

export default Calcit