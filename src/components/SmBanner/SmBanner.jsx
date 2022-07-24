import React, { useEffect, useRef } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./SmBanner.css";

const SmBanner = () => {
  const arrData = [
    {
      link: `https://www.nordstromrack.com/promo/tax-free-weekend`,
      imgUrl: `https://n.nordstrommedia.com/id/c01ff961-11fe-4665-88d9-3d5bf084390c.jpeg?h=200&w=1608`,
    },
    {
      link: `https://www.nordstromrack.com/c/best-selling-denim`,
      imgUrl: `https://n.nordstrommedia.com/id/a2095c23-e54d-44c6-885b-b56c16aa6f75.jpeg?h=200&w=1606`,
    },
  ];


  const left = useRef(null);
  const right = useRef(null);
  const container = useRef(null);

  const [state, setState] = useState(0);

  const handleEnter =()=>{
    right.current.classList = "smbannerRightNavigation";
    left.current.classList = "smbannerLeftNavigation";

  }
  const handleLeave =()=>{
        right.current.classList = "smbannerRightNavigation displayR";
        left.current.classList = "smbannerLeftNavigation displayL";
  }


  useEffect(() => {
    let stop = setInterval(() => {
      setState((prev) => {
        if (prev === 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => {
      clearInterval(stop);
      // console.log("Interval Clear");
    };
  }, [state]);

  return (
    <>
    
      <div  onMouseLeave={handleLeave}  onMouseEnter={handleEnter} ref={container} className="smcontainerBanner">
        <div className="smbannerSlides">
          {state === 0 ? (
            <div value="0">
              <div>
                <Link  style={{ textDecoration: 'none',color:"black" }} to={`${arrData[0].link}`}>
                  <img
                    style={{ width: "100%" }}
                    src={`${arrData[0].imgUrl}`}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          ) : null}
          {state === 1 ? (
            <div  value="1">
              <div>
                <Link  style={{ textDecoration: 'none',color:"black" }} to={`${arrData[1].link}`}>
                  <img
                    style={{ width: "100%" }}
                    src={`${arrData[1].imgUrl}`}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          ) : null}
        </div>

        <div    ref={left}  className="smbannerLeftNavigation displayL">
          {" "}
          <ArrowBackIosIcon />
        </div>
        <div ref={right}   className="smbannerRightNavigation displayR">
          {" "}
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
};

export default SmBanner;
