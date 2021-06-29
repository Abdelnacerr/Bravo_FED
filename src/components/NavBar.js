import React from 'react'
import './Navbar.css'
import { MenuItems} from "./MenuItems"
import logo from '../Assets/logo.svg'

function NavBar() {
    return (
        <nav className="NavbarItem">
            <img src={logo} style={{width: 60, position: 'absolute', left: 20, top: 15}}/>

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
