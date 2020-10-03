import React from 'react';
import c from './App.css';
import HomePage from './Components/HomePage/HomePage.jsx';
import Services from './Components/Services/Services.jsx';
import Calculator from './Components/Calculator/Calculator.jsx';
import Сontacts from './Components/Сontacts/Сontacts.jsx';
import { Route } from 'react-router-dom';


const App = (props) => {

  return (

    <div className={c.App}>

      <Route
        exact
        path="/"
        render={() => (
          <HomePage state={props.state} slideChange={props.slideChange} 
          sliderBegin={props.sliderBegin}/>
        )}
      />
      <Route
        exact
        path="/servises"
        render={() => (
          <Services state={props.state} changePage={props.changePage}
            serviseGive={props.serviseGive} changeImg={props.changeImg} />
        )}
      />
      <Route
        exact
        path="/calculator"
        render={() => (
          <Calculator state={props.state} mouseCalc={props.mouseCalc} getPrice={props.getPrice}/>
        )}
      />
      <Route
        exact
        path="/contacts"
        render={() => (
          <Сontacts state={props.state} giveForm={props.giveForm} messegeSend={props.messegeSend}/>
        )}
      />


    </div>


  );
}

export default App;