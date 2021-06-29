import React from 'react'
import './Navbar.css'
import { MenuItems} from "./MenuItems"

function NavBar() {
    return (
        <nav className="NavbarItem">
            <h1 className="Brandname">MXDC</h1>
            <ul>
                {MenuItems.map((item, index) =>{ 
                    return (
                        <li key={index}>
                            <a className= {item.Name} href = {item.url} > 
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                
            </ul>
            
        </nav>
    )
}

export default NavBar
