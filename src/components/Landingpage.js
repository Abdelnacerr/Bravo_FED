import React from 'react'
import NavBar from './NavBar'
import Events from "./Events"
import Footer from './Footer'

import Desktop_header from '../Assets/Desktop_header.png'

function Landingpage() {
    return (
        <>
            <NavBar />
            <div className="container">
                <img src={Desktop_header} alt="MXDC" className= "LPimage"></img>
                <div className="OverLaytext">MXDC Melbourne</div>
                <div className="OverLaytext1">June 20 - 27</div>
            </div>
            <Events />
            <Footer />
        </>
    )
}

export default Landingpage
