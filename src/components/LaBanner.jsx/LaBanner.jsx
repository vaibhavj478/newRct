import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


import  './LaBanner.css'
import { border } from "@mui/system";

const LaBanner = () => {


    let dataArr =[


        {
            url:"https://www.nordstromrack.com/clearance",
            imgUrl:"https://n.nordstrommedia.com/id/db516501-cee3-473f-81b0-71ab64f88914.jpeg?h=720&w=1608",
            head:"Online & In Stores Through July 24",
            para:"Valid only on selected red-tag clearance items. Online prices as marked; in-store markdowns taken at register.",
            category:["Women's Clearance" , "Men's Clearance"  ,"All Clearance" ,"See Restrictions"]
        }
,
        {
            url:"https://www.nordstromrack.com/clearance",
            head:"Stock Up-Worthy Finds at Amazing Prices",
            imgUrl:"https://n.nordstrommedia.com/id/a505e62a-33f4-45b4-9a67-1c6db186f102.jpeg?h=720&w=1608",
            para:"Hurley, adidas, Steve Madden and more.",
            category:["Kids" , "All Back to School"  ]
        }
,
        {
            url:"https://www.nordstromrack.com/clearance",
            imgUrl:"https://n.nordstrommedia.com/id/a5f4b0c2-9b8c-4867-a8d8-b3e5f4600f94.jpeg?h=720&w=1608",
            head:"Up to 65% Off",
            para:"Go ahead—RSVP 'yes.'",
            category:["Women's Wedding Guest Looks" , "Men's Wedding Guest Looks"  ]
        }


    ]

    const left = useRef(null);
    const right = useRef(null);
    const container = useRef(null);
  
    const [state, setState] = useState(0);
  
    const handleEnter =()=>{
      right.current.classList = "labannerRightNavigation";
      left.current.classList = "labannerLeftNavigation";
  
    }
    const handleLeave =()=>{
          right.current.classList = "labannerRightNavigation displayR";
          left.current.classList = "labannerLeftNavigation displayL";
    }
  

    useEffect(() => {
        let stop = setInterval(() => {
          setState((prev) => {
            if (prev === 2) {
              return 0;
            }
            return prev + 1;
          });
        }, 3000);
    
        return () => {
          clearInterval(stop);
          console.log("Interval Clear");
        };
      }, [state]);


  return (
    <>
      {/* <div>Large Banner</div> */}
      <div  onMouseLeave={handleLeave} onMouseEnter={handleEnter}ref={container}  className="lacontainerBanner"
      >
        <div className="labannerSlides">

          {state === 0 ? <div value="0">

                <div>
                    <Link  style={{ textDecoration: 'none',color:"black" }} to={`${dataArr[0].url}`} >
                        <div className="lainnerSlide"  >
                            <img  style={{width:"100%"}} src={`${dataArr[0].imgUrl}`} alt="" />
                            <h3> <p><strong> {`${dataArr[0].head}`}</strong> </p> </h3>
                            <div>
                            {
                                dataArr[0].category.map((ele,ind)=> <span  key={ind}  >{ele}</span> )
                            }
                            </div>
                        </div>
                    </Link>
                </div>

          </div> : null}
          {state === 1 ? <div value="1">
          <div>
                    <Link  style={{ textDecoration: 'none',color:"black" }} to={`${dataArr[1].url}`} >
                        <div className="lainnerSlide"  >
                            <img  style={{width:"100%"}} src={`${dataArr[1].imgUrl}`} alt="" />
                            <h3> <p><strong> {`${dataArr[1].head}`}</strong> </p> </h3>
                            <div>
                            {
                                dataArr[1].category.map((ele,ind)=> <span key={ind} >{ele}</span> )
                            }
                            </div>
                        </div>
                    </Link>
                </div>
          </div> : null}
          {state === 2 ? <div value="2">

          <div>
                    <Link style={{ textDecoration: 'none',color:"black", }} to={`${dataArr[2].url}`} >
                        <div className="lainnerSlide"  >
                            <img  style={{width:"100%"}} src={`${dataArr[2].imgUrl}`} alt="" />
                            <h3> <p><strong> {`${dataArr[2].head}`}</strong> </p> </h3>
                            <div>
                            {
                                dataArr[2].category.map((ele,ind)=> <span  key={ind}  >{ele}</span> )
                            }
                            </div>
                        </div>
                    </Link>
                </div>
                            
          </div> : null}
        </div>

        <div ref={left} className="labannerLeftNavigation displayL">
          {" "}
          <ArrowBackIosIcon fontSize="large" />
        </div>
        <div ref={right} className="labannerRightNavigation displayR">
          {" "}
          <ArrowForwardIosIcon fontSize="large" />
        </div>
      </div>
    </>
  );
};

export default LaBanner;
