import React from "react";
// import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const HomePage = () => {
	return (
		// body
		<div className="px-10  sm:px-16 py-10 bg-very-light-grey-l h-screen">
			{/* Search and filter row */}
			<div className=" flex-wrap justify-between md:flex">
				{/* Search */}
        {/* implement search */}
				<div className="flex items-center shadow-lg h-10 w-full text-sm p-6 bg-white  md:w-[400px] rounded-sm">
					<AiOutlineSearch
						size={16}
						className="text-gray-400 mr-3"
					></AiOutlineSearch>
					<input
						type="text"
						name=""
						id=""
						placeholder="Search for a country.."
					/>
				</div>
				{/* Filter */}
          {/* TODO: implement fliter */}
				<div className="flex mt-6 md:mt-0 items-center px-4 py-2 max-w-fit bg-white shadow-lg rounded-sm cursor-pointer">
					<span className="font-[600] text-sm">Filter by Region</span>
					<RiArrowDropDownLine size={20} className="ml-4"></RiArrowDropDownLine>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
