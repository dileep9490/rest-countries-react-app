import React from "react";
import { BsMoon } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className="flex justify-between shadow px-8 md:px-16  py-3">
			<h1 className="font-[800] text-base md:text-2xl">Where in the World?</h1>
			<div className="flex items-center md:right-16 cursor-pointer">
				<BsMoon size={14} />{" "}
				<p className="font-[600] text-base md:text-base pl-1">Dark Mode</p>
			</div>
		</div>
	);
};

export default Navbar;
