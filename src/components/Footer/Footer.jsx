import React, { useState } from "react";
import FooCol from "./FooCol";
import { Link } from "react-router-dom";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const footerLinkData = [
    {
      id: 1,
      head: "customer Service",
      colArr: [
        { url: ``, name: `order status` },
        { url: ``, name: `guest return` },
        { url: ``, name: `shipping & returns` },
        { url: ``, name: `gift cards` },
        { url: ``, name: `FAQ` },
        { url: ``, name: `contact us` },
      ],
    },
    {
      id: 2,
      head: "about us",
      colArr: [
        { url: ``, name: `about our brand ` },
        { url: ``, name: `the norby club ` },
        { url: ``, name: `store locator` },
        { url: ``, name: `all brands` },
        { url: ``, name: `careers` },
        { url: ``, name: `get email updates` },
        { url: ``, name: `nordstrom blog` },
        { url: ``, name: `norby podcast ` },
      ],
    },
    {
      id: 3,
      head: "nordstrom rack & the community",
      colArr: [
        { url: ``, name: `corporate social responsibility` },
        { url: ``, name: `diversity, inclusion & belonging` },
        { url: ``, name: `big borthers big sisterz` },
        { url: ``, name: `donate clothes` },
      ],
    },
    {
      id: 4,
      head: "nordstrom card",
      colArr: [
        { url: ``, name: `apply for a nordstrom` },
        { url: ``, name: `pay my bill` },
        { url: ``, name: `manage my nordstrom card` },
      ],
    },
    {
      id: 5,
      head: "nordstrom, inc.",
      colArr: [
        { url: ``, name: `nordstrom` },
        { url: ``, name: `nordstrom canada` },
        { url: ``, name: `hautelook` },
        { url: ``, name: `investor relation` },
        { url: ``, name: `press releases` },
        { url: ``, name: `nordstrom media network` },
      ],
    },
  ];


  const [state, setState] = useState("");

  const handleChange =(e)=>{

    setState(e.target.value);


  }
  const handleSubmit =(e)=>{

   console.log(state);


  }



  return (
    <>
      <footer id="footerContainer">
        <div id="footerPrefix">
          <div>
            <Link to={`https://www.nordstromrack.com/my-account/marketing-email-opt-in/`} >

            <img 
            style={{width:"100%"}}
                src="https://n.nordstrommedia.com/id/e63e8dd7-3537-47db-912c-7d370e63658f.jpeg?h=180&w=1600"
    
              alt="login_img"
            />
            </Link>
          </div>

          <div>
            {" "}
            <span> Get E-mail Updates</span>
          </div>
          <input value={state} onChange={(e)=> handleChange(e)} placeholder="E-mail Address" type="email"  />
          <button  onClick={()=> handleSubmit()}  type="submit">SIGN UP</button>
        </div>

        <div id="footerUp">
          {footerLinkData.map((el) => {
            return (
              <div key={el.id}>
                <FooCol id={el.id} head={el.head} colArr={el.colArr} />
              </div>
            );
          })}
        </div>

        <div id="footerSocial" >

            <div> <span> <PhoneIphoneIcon /></span> Download Our App</div>
            <div><span><FacebookIcon /></span><span><InstagramIcon /></span><span><TwitterIcon /></span></div>
            

        </div>

        <div id="footerBottom">
          <ul>
            <li>
              {" "}
              <Link to="https://nordstrom.com/browse/customer-service/policy/privacy">
                Privacy{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="https://www.nordstrom.com/browse/customer-service/policy/privacy#anchor-link-opting-out-sale">
                Do Not Sell My Personal Information
              </Link>
            </li>
            <li>
              {" "}
              <Link to="https://www.nordstromrack.com/terms">
                Terms & Conditions
              </Link>
            </li>
            <li>
              {" "}
              <Link to="https://www.nordstromrack.com/privacy#online-advertising-and-third-parties-we-work-with">
                Internet Based Ads
              </Link>
            </li>
            <li>
              {" "}
              <Link to="https://www.nordstrom.com/browse/nordstrom-cares">
                California Supply Chain Act
              </Link>
            </li>
            <li> © 2022 Nordstrom Rack</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
