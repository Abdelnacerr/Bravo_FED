import React from "react";
import "./Footer.css";
import { FooterItems } from "./FooterItems";
import logo from "../Assets/logo.svg";

function Footer() {
	return (
		<div className='footer'>
			<img
				alt='MXDC'
				src={logo}
				style={{ width: 80, position: "absolute", left: 40, top: 20 }}
			/>
			<br></br>
			<br></br>

			<ul>
				{FooterItems.map((item, index) => {
					return (
						<li key={index}>
							<a className={item.Name} href={item.url}>
								{item.title}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default Footer;
