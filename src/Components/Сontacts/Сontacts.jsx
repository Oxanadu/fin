import React from 'react';
import Nav from '../HomePage/Nav/Nav'
import Logo from '../HomePage/Logo/Logo'
import Popup from './Popup/Popup'
import c from './Сontacts.module.css'


const Сontacts = (props) => {
    return (
        <div className={c.сontacts}>
            <div className={c.contacts_left}>
                <Logo />
                <form>
                    <div className={c.form_box}>
                        <div className={c.input_name}>
                            <p>Имя</p>
                            <input type="text" name="name" id="name"/> 
                        </div>
                        <div className={c.input_phone}>
                            <p>Телефон*</p>
                            <input type="tel" name="name" id="tel"/>
                            <div className={c.erorr_tel} id="errtel">
                            *Не правильно введен номер телефона
                            </div> 
                        </div>
                        <div className={c.input_mail}>
                            <p>E-mail*</p>
                            <input type="email" name="name" id="email"/>
                            <div className={c.erorr_email} id="erremail">
                            *Не правильно введен e-mail
                            </div> 
                        </div>
                        <div className={c.input_company}>
                            <p>Компания</p>
                            <input type="text" name="company" id="company"/> 
                        </div>
                        <div className={c.input_message}>
                            <p>Сообщение</p>
                            <textarea type="message" name="name" id="message"></textarea> 
                        </div>
                        <div className={c.input_submit}>
                            <button onClick={props.giveForm} type="button" className={c.button}>Отправить</button>
                        </div>    
                    </div>     
                </form>
            <Popup giveForm={props.giveForm} messegeSend={props.messegeSend}/>
            </div>
            <Nav />
            <div className={c.contacts_right}>
                    <h3 className={c.contacts_right_title}> Наши контакты:</h3>
                    <span className={c.content_right_name}>
                    ООО "ВикетГрупп" 
                    </span>
                    <span className={c.content_right_tel}>
                    Телефон +375 29 642-91-85
                    </span>
                    <span className={c.content_right_text}>
                    Р/сч: BY90 ALFA 3012 2492 6600 1027 0000 в ЗАО Альфа-Банк.
                    </span>
                    <span className={c.content_right_text}>
                    Центральный офис 220013, г. Минск, ул. Сурганова, 43-47.  
                    </span>
                    <span className={c.content_right_text}>
                    BIC SWIFT: ALFABY2X, УНП:191630743 
                    </span>
                    <span className={c.content_right_text}>
                    Юридичесский адрес: г. Минск, ул. Якуба Коласа, д.37, пом. 16,офис 2 
                    </span>
                    
            </div>




        </div>
    )
}

export default Сontacts