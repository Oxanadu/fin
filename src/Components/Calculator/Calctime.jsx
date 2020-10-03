import React from 'react';
import c from './Calctime.module.css'

const Calctime = (props) => {
    return (
        <div onMouseOver={props.mouseCalc} className={c.calctime} id="imgCalcTime">
            <div  className={c.title} >
            Расчет системы учета рабочего времени
            </div>
            <div className={c.amount_comp}>
                <div className={c.calc_text}>
                    Количество сотрудников
                </div>
                <input className={c.input_comp} type="text" name ="number" id="comp2"/>
            </div>
            <div className={c.amount_serv}>
                <div className={c.serv_text}>
                    Количество дверей (от 1 до 10)
                </div> 
                <input className={c.input_serv} type="text" name ="number" id="serv2"/>
            </div>
            <div className={c.result}>
                <div className={c.result_text}>
                {props.state.priceTime[1]}руб
                </div> 
                <button onClick={props.getPrice} className={c.sum_btn} id="button2">Рассчитать</button>
            </div>
        </div>
    )
}

export default Calctime