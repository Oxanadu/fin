import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import state, { subscribe, changePage, serviseGive, changeImg, slideChange, //  импорт содержимого state
  sliderBegin, giveForm, messegeSend, mouseCalc, getPrice, getMenu} 
from './Redux/state'

let renderReload = () => { //фун-ия для перерисовки компоненты при изменении state
  ReactDOM.render(

    <BrowserRouter>
      <App state={state} changePage={changePage} 
      serviseGive={serviseGive} 
      changeImg={changeImg} 
      slideChange={slideChange}
      sliderBegin={sliderBegin}
      giveForm={giveForm}                            // проброс через props
      messegeSend={messegeSend}
      mouseCalc={mouseCalc}
      getPrice={getPrice}
      getMenu={getMenu}/>
    </BrowserRouter>,

    document.getElementById('root')

  );

}

renderReload(state)
subscribe(renderReload)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();