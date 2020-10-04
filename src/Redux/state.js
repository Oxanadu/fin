import { textHome } from "../text"

let renderReload = () => {
    console.log('q');
}

const state = {
    state: [true, false, false], //состояние иконок Servises
    img: ['comp', 'touch', 'fase'], 
    services: ['IT аутсорсинг', 'Контроль доступа', 'Видеоаналитика'],
    imgLarge1: ['service1', 'service2', 'service3', 'service4'],
    imgLarge2: ['accesscontrol1', 'accesscontrol2', 'accesscontrol3', 'accesscontrol4'],
    imgLarge3: ['videoanalitics1', 'videoanalitics2', 'videoanalitics3', 'videoanalitics4'],
    imgSmall1: ['service_small1', 'service_small2', 'service_small3', 'service_small4'],
    imgSmall2: ['accesscontrol_small1', 'accesscontrol_small2', 'accesscontrol_small3', 'accesscontrol_small4'],
    imgSmall3: ['videoanalitics_small1', 'videoanalitics_small2', 'videoanalitics_small3', 'videoanalitics_small4'],
    id: ['service', 'accesscontrol', 'videoanalitics'],
    imgStart: 'service1',
    textStart: 0,
    imgEnd: '100%',
    form: {
        name: '',
        tel: '',
        email: '',
        company: '',
        message: ''
    },
    priceIt: ['buttonOn', 0],
    priceTime: ['buttonOn', 0],
    menu: false
}
let startMarg = 0;
let i = 0;
export const sliderBegin = () => { //функция для запуска слайдера Home в момент первой отрисовки запускается useEffect
    if (!document.getElementById(`slide`)) return;
    let slide = document.getElementById(`slide`);
    let text = document.getElementById(`text`);
    let text2 = document.getElementById(`text2`);

    setTimeout(() => {
        text.textContent = textHome.titleHome[i];
        text2.textContent = textHome.textDiscr[i];
        slide.style.marginLeft = startMarg + "%";
        startMarg = startMarg - 100;
        i++;

        if (startMarg > -600) {
            sliderBegin();
        } else {
            slide.style.marginLeft = 0;
            i = 0;
            text.textContent = textHome.titleHome[0];
            text2.textContent = textHome.textDiscr[0];
        }

    }, 1000);
};

export const slideChange = (e) => {                                     // для запуска слайдера в ручную 
    let index = e.currentTarget;
    document.querySelectorAll('.step').forEach((value, i) => {

        if (+index.id === i) value.style.backgroundColor = '#020035'; // цвет при наведении
        else value.style.backgroundColor = '#ded3f5';                   // цвет неактивный

    });

    document.getElementById(`slide`).style.marginLeft = `${index.id * (-100)}%`; //изменение контента в зависимости от id
    document.getElementById(`text`).textContent = textHome.titleHome[index.id];
    document.getElementById(`text2`).textContent = textHome.textDiscr[index.id];
}

export const changePage = (e) => {                  // при нажатии иконок задает начальные картинки 
    state.state.forEach((value, index) => {
        if (index === +e.currentTarget.id) {
            state.state[index] = true;
            switch (index) {
                case 0:
                    state.imgStart = state.imgLarge1[0]
                    break;
                case 1:
                    state.imgStart = state.imgLarge2[0]
                    break;
                case 2:
                    state.imgStart = state.imgLarge3[0]
                    break;
                default:
                    break;
            }
        }
        else state.state[index] = false
        state.imgEnd = '100%';
    })

    renderReload()

}
export const serviseGive = (imgEnd) => {        //в момент отрисовки (useEffect) меняется margin
    let a = document.getElementById('outsorsing')
    a.style.marginLeft = imgEnd;
    setTimeout(() => {
        a.style.marginLeft = 0;

    }, 700);

}
export const changeImg = (e) => {               
    state.imgStart = e.currentTarget.id;
    state.textStart = +state.imgStart.match(/\d+/g) - 1;  // получение цифры из названия картинки
    document.querySelectorAll('.sliders').forEach((value, index) => {
        if (value.id === state.imgStart) e.currentTarget.style.opacity = 0.3;
        else value.style.opacity = 1;
    })
    state.imgEnd = 0;
    renderReload()
}

export const giveForm = () => {
    const emailValid = /^[^@]+@[^@.]+\.[^@]+$/;
    const telValid = /^(\+)(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;


    state.form.tel = document.getElementById('tel').value;
    if (telValid.test(document.getElementById('tel').value) === false) {
        document.getElementById('errtel').style.display = 'block';
    } else {
        document.getElementById('errtel').style.display = 'none';
        if (emailValid.test(document.getElementById('email').value) === false) {
            document.getElementById('erremail').style.display = 'block';
        } else {
            state.form.name = document.getElementById('name').value;
            state.form.email = document.getElementById('email').value
            state.form.company = document.getElementById('company').value;
            state.form.message = document.getElementById('message').value;
            document.getElementById('send').style.display = 'block';  // popap окно
            document.getElementById('erremail').style.display = 'none';
        }
    }
}
export const messegeSend = () => { //очитска формы закрытием
    document.getElementById('send').style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('email').value = '';
    document.getElementById('company').value = '';
    document.getElementById('message').value = '';
    renderReload();
}

export const mouseCalc = (e) => { // изменение картинки при наведении на текст
    if (e.currentTarget.id === 'imgCalcTime')
        document.getElementById('calcImg').style.transform = 'rotateY(0deg)'
    else document.getElementById('calcImg').style.transform = 'rotateY(180deg)'
}

export const getPrice = (e) => {                // работа калькулятора
    let a;
    e.currentTarget.style.marginRight = '30%'  // изменение положения кнопки
    if (e.currentTarget.id === 'button1') {
        a = document.getElementById('comp1').value * 10 +
            document.getElementById('serv1').value * 40
        if (a) state.priceIt[1] = a;
        renderReload();
    } else {
        if (+document.getElementById('serv2').value > 0 && +document.getElementById('serv2').value < 11) { 
            a = document.getElementById('comp2').value * 50 +
                document.getElementById('serv2').value * 12;
            if (a) state.priceTime[1] = a;
            renderReload();
        }
    }
}

export const getMenu = () => { //кнопка меню
    state.menu = !state.menu;
    (state.menu === true) ? document.getElementById('nav').style.display='block' : document.getElementById('nav').style.display='none'
 
}


export const subscribe = (observe) => {
    renderReload = observe
}
window.state = state
export default state