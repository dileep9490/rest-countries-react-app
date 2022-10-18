import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import CountriesView from "../components/CountriesView";

const HomePage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(null);

	const getAllCountries = async () => {
		setLoading(true);
		const resp = await fetch("https://restcountries.com/v3.1/all");
		const reqResp = await resp.json();
		setData(reqResp);
		setLoading(false);
	};

	useEffect(() => {
		getAllCountries();
	}, []);

	return (
		// body
		<div className="px-10  sm:px-16 py-10 bg-very-light-grey-l ">
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
				<div>
					<div className="flex mt-6 md:mt-0 peer w-28 sm:w-44 items-center  bg-white shadow-lg p-3 rounded-sm cursor-pointer">
						<span className="font-[600]  text-sm">Filter by Region</span>
						<RiArrowDropDownLine
							size={20}
							className="ml-4"
						></RiArrowDropDownLine>
					</div>
					{/* Drop down menu */}
					<div className="absolute  p-3 w-28 sm:w-44  border border-t-black/40 bg-white  hidden peer-hover:block flex-col hover:block">
						<p className="font-semibold text-md">Africa</p>
						<p className="font-semibold text-md">America</p>
						<p className="font-semibold text-md">Asia</p>
						<p className="font-semibold text-md">Europe</p>
						<p className="font-semibold text-md">Oceania</p>
					</div>
				</div>
			</div>
			<div>
				{/* body */}
				{loading ? (
					<div> Is Loading....</div>
				) : (
					<CountriesView countiresData={data} />
				)}
			</div>
		</div>
	);
};

export default HomePage;
