import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Traffic from "./TrafficLight";



//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Traffic/>
			<hr/>
			<Footer/>
		</div>
	);
};

export default Home;
