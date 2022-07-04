import React, { Fragment, useState, useRef } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const clearRef = useRef(null);
  const clearRef2 = useRef(null);

  function handleClear() {
    clearRef.current.value = "";
    clearRef2.current.value = "";
  }

  function Bmi() {
    let h = height / 100;
    let bmx = Number(weight / Math.pow(h, 2));
    let bmii = bmx.toFixed(2);

    let bmiStatus = getStatus(bmii);
    setBmi(bmii);
    setStatus(bmiStatus);
    //setHeight("");
    //setWeight("");
  }
  function getStatus(bmii) {
    if (bmii < 18.5) return "underweight";
    else if (bmii >= 18.5 && bmii < 24.9) return "Normal";
    else if (bmii >= 25 && bmii < 30) return "Overweight";
    else return "Obese";
  }

  return (
    <Fragment>
      <div className="body">
        <h1>
          <center> Body Mass Index Calculator</center>
        </h1>

        <div className="app">
          <div className="app-inner">
            <label>Weight(kg):</label>
            <input
              type="number"
              ref={clearRef}
              onChange={e => {
                setWeight(e.target.value);
              }}
            />
          </div>
          <div className="app-inner">
            <label>Height(cm):</label>
            <input
              type="number"
              ref={clearRef2}
              onChange={e => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <button type="submit" onClick={Bmi}>
            calculate
          </button>
          <button onClick={handleClear}>clear</button>
          {status && (
            <div className="bottom">
              {" "}
              <p>Your BMI is: {bmi} </p>
              <p>You are {status}</p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
