import React, { useCallback } from "react";
import "../styles/css/calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");

  document.onkeyup = (e) => {
    if (e.key == "0") {
      setValue(value + 0);
    } else if (e.key == "1") {
      setValue(value + 1);
    } else if (e.key == "2") {
      setValue(value + 2);
    } else if (e.key == "3") {
      setValue(value + 3);
    } else if (e.key == "4") {
      setValue(value + 4);
    } else if (e.key == "5") {
      setValue(value + 5);
    } else if (e.key == "6") {
      setValue(value + 6);
    } else if (e.key == "7") {
      setValue(value + 7);
    } else if (e.key == "8") {
      setValue(value + 8);
    } else if (e.key == "9") {
      setValue(value + 9);
    } else if (e.key == "+") {
      setValue(value + "+");
    } else if (e.key == "-") {
      setValue(value + "-");
    } else if (e.key == "*") {
      setValue(value + "*");
    } else if (e.key == "/") {
      setValue(value + "/");
    } else if (e.key == "Enter") {
      setValue(eval(value));
    } else if (e.key == "Escape") {
      setValue("");
    } else if (e.key == "Backspace") {
      setValue(value.slice(0, -1));
    }
  };

  return (
    <section className="container">
      <div className="SectionDiv">
        <nav className="NavTitle">
          <h2 className="heading">Calculator</h2>
        </nav>

        <input type="text" className="Display" value={value} readOnly></input>

        <div className="ButtonSection">
          <div className="ButtonContainer">
            <input
              type="button"
              className="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />

            <input
              className="button"
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button delete"
              type="button"
              value="DEL"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
          </div>
          <div className="ButtonContainer">
            <input
              className="button"
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              value="+"
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="ButtonContainer">
            <input
              className="button"
              value="1"
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              value="2"
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              value="3"
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              value="-"
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="ButtonContainer">
            <input
              className="button"
              value="."
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              value="0"
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              value="/"
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="button"
              value="*"
              type="button"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="ButtonContainer">
            <input
              className="button reset delete"
              value="RESET"
              type="button"
              onClick={(e) => setValue("")}
            />
            <input
              className="button equal"
              value="="
              type="button"
              onClick={(e) => setValue(eval(value))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
