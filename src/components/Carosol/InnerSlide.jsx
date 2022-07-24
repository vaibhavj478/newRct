import React from "react";
import { Link } from "react-router-dom";

import './InnerSlide.css'

const InnerSlide = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((el, ind) => {
        return (
          <div className="innerSlide" key={ Math.floor( Math.random()*1000)} >
            <img className="innerImg" src={`${el.img}`} alt="" />
            <h3  className="innerHead" >{el.head}</h3>
            <p className="innerPara" >{el.para}</p>
            <div>
            {
              (el.category.length !== 0 )?


                el.category.map((ele,index)=>{

                  return (
                    <span className="innerCategory" key={index+1}>
                      <Link  style={{ textDecoration: 'none',color:"rgb(51,102,187);" }}  to={`/`} >{ele}</Link>
  
                    </span>
                  )
                }):null
              
             
            }

            </div>
           
          </div>
        );
      })}
    </>
  );
};

export default InnerSlide;
