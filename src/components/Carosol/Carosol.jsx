import React, { useRef } from "react";
import { useState, useEffect } from "react";
import InnerSlide from "./InnerSlide";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "./Carosol.css";

const Carosol = ({ arr, head, buttonDetail }) => {
  const left = useRef(null);
  const right = useRef(null);

  console.log(arr, head, buttonDetail);

  const [state, setState] = useState(0);

  const handleRight = () => {
    setState((prev) => prev + 1);
  };

  const handleLeft = () => {
    setState((prev) => prev - 1);
  };

  return (
    <>
      <div className="boxCarosol">
        <h1>{head}</h1>
        <div className="containerCarosol">
          {arr.map((el, ind) => {
            let slide = null;
            if (state === ind) {
              slide = (
                <div className="slideCarosol" key={ind + 1}>
                  <InnerSlide data={el} />
                </div>
              );
            }
            return slide;
          })}

          {buttonDetail === "true" ? (
            <div className="paginationCarosol">
              <button
                ref={left}
                onClick={handleLeft}
                className="labannerLeftNavigation displayL"
              >
                left
                <ArrowBackIosIcon fontSize="large" />
              </button>
              <button
                ref={right}
                onClick={handleRight}
                className="labannerRightNavigation displayR"
              >
                right
                <ArrowForwardIosIcon fontSize="large" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Carosol;
