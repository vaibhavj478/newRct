import React from 'react'


import { Link } from 'react-router-dom'

import './TopBanner.css'

const TopBannser = () => {
  return (

    <>
    <div  style={{margin:"2.5rem 0"}}  >

        <div> <h1 className='userLandingPage'  > Welcome back,User!</h1></div>

        <div className='userLandingPageBanner' >
            
                <Link   style={{ textDecoration: 'none',color:"black" }} to={`https://www.nordstromrack.com/c/new-arrivals`} >

            <img style={{width:"100%"}}  src="https://n.nordstrommedia.com/id/fe372d27-bb41-4405-843d-372e8a8e5346.jpeg?h=200&w=1608" alt="New arrivals are online and in stores." />
                </Link>



        </div>




    </div>
    

    
    </>

  )
}

export default TopBannser