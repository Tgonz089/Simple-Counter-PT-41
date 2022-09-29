//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";
//import SecondsCounter from "./component/secondscounter.jsx"
const myStyles = {
  textAlign: "center",
  background: "black",
};

const SecondsCounter = (props) => {
  return (
    <div className="counter" style={myStyles}>
      <div className="clock">
        <i class="far fa-clock"></i>
      </div>
      <div className="six">{props.digit6 % 10}</div>
      <div className="five">{props.digit5 % 10}</div>
      <div className="four">{props.digit4 % 10}</div>
      <div className="three">{props.digit3 % 10}</div>
      <div className="two">{props.digit2 % 10}</div>
      <div className="one">{props.digit1 % 10}</div>
    </div>
  );
};

SecondsCounter.PropTypes = {
  digit6: PropTypes.number,
  digit5: PropTypes.number,
  digit4: PropTypes.number,
  digit3: PropTypes.number,
  digit2: PropTypes.number,
  digit1: PropTypes.number,
};

//render your react application
let counter = 0;
setInterval(function () {
  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  console.log(six, five, four, three, two, one);
  counter++;
  ReactDOM.render(
    <SecondsCounter
      digit1={one}
      digit2={two}
      digit3={three}
      digit4={four}
      digit5={five}
      digit6={six}
    />,
    document.querySelector("#app")
  );
}, 1000);
