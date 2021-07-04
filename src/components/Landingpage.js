import React from "react";
import NavBar from "./NavBar";
import Events from "./Events";
import Footer from "./Footer";
import "../App.css";
import "./Navbar.css";

function Landingpage() {
	return (
		<>
			<NavBar />
			<div className='container'>
				<h1>MXDC Melbourne</h1>
				<p>June 20 - 27</p>
			</div>
			<Events />
			<Footer />
		</>
	);
}

export default Landingpage;
