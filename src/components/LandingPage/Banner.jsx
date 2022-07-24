import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import './banner.css'

const Banner = () => {

    const [state, setState]  = useState(0);


    useEffect(()=>{

        let stop = setInterval(()=>{


            setState((prev)=> {

                if(prev === 3){

                    return 0
                }
                return  prev+1
            
            });

        },3000)

        return ()=>{

            clearInterval(stop);
            console.log("Interval Clear");
        }

    },[state])

  return (

    <>
    <div  className='containerBanner'  >

            <div  className='bannerSlides'  >
               { state === 0 ?  <div value='0' >Slide one</div>: null }
               { state === 1 ?  <div value='1' >Slide two</div> : null}
               { state === 2 ?  <div value='2' >Slide three</div> : null}
               { state === 3 ?  <div value='3' >Slide four</div> : null}

            </div>

        <div className='bannerLeftNavigation' >left</div>
        <div className='bannerRightNavigation' >right</div>





    </div>


    </>
  )
}

export default Banner