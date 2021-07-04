import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import logo from "../Assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
	const [clicked, setClicked] = useState(false);

	function handleClick(e) {
		e.preventDefault();
		setClicked(!clicked);
	}

	return (
		<nav className='NavbarItems'>
			<img
				src={logo}
				style={{ width: 80, position: "absolute", left: 20 }}
				alt='MXDC'
			/>
			<div className='menu-icon' onClick={handleClick}>
				{!clicked ? (
					<FontAwesomeIcon icon={faBars} />
				) : (
					<FontAwesomeIcon icon={faTimes} />
				)}
			</div>
			<ul className={clicked ? "nav-menu active" : "nav-menu"}>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<a className={item.Name} href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default NavBar;
