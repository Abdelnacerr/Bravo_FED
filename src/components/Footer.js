import React from 'react'
import './Footer.css'
import {FooterItems} from './FooterItems'

function Footer() {
    return (
        <div className="footer">
            <h1 className="Brandname">MXDC</h1>
            <ul>
                {FooterItems.map((item, index) =>{ 
                    return (
                        <li key={index}>
                            <a className= {item.Name} href = {item.url} > 
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                
            </ul>
            
        </div>
    )
}
export default Footer
