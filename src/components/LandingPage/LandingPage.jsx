import React from "react";
import LaBanner from "../LaBanner.jsx/LaBanner";
import SmBanner from "../SmBanner/SmBanner";
import TopBannser from "../TopBanner/TopBannser";

import Carosol from "../Carosol/Carosol";

import {  headdingArr, one, two, three ,four } from "../Carosol/Data";



const LandingPage = () => {

  const headingName = headdingArr();

  return (
    <>
      <div>
        <div style={{ width: "95%", margin:"auto" }}>
          <div>LandingPage</div>
            {/* <Banner/> */}

          <TopBannser/>
            
            <LaBanner/>

            <Carosol  arr={one()} head={headingName[0]} buttonDetail={"true"}  />
            <Carosol  arr={two()} head={headingName[1]} buttonDetail={"false"}  />
            <Carosol  arr={three()} head={headingName[3]} buttonDetail={"false"}  />
            <Carosol  arr={four()} head={headingName[4]} buttonDetail={"false"}  />

            <SmBanner/>


        </div>
      </div>
    </>
  );
};

export default LandingPage;
