import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import CountriesView from "../components/CountriesView";
import Loading from "../components/Loading";

const HomePage = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(null);
	const [showFilter, setShowFilter] = useState(false);
	const [countriesData, setCountriesData] = useState([]);

	const getAllCountries = async () => {
		setLoading(true);
		const resp = await fetch("https://restcountries.com/v3.1/all");
		const reqResp = await resp.json();
		setData(reqResp);
		setCountriesData(reqResp);
		setLoading(false);
	};

	//show is loading when filtering

	const filterData = (region) => {
		if (region !== "All") {
			const copy = [...countriesData];
			setData(
				copy.filter((data) => {
					return data.region === region;
				})
			);
		} else {
			setData(countriesData);
		}
	};

	const nameSearch = (name) => {
		if (name.lenght !== 0) {
			const copy = [...countriesData];
			setData(
				copy.filter((item) => {
					if (item !== "") {
						name = name.charAt(0).toUpperCase() + name.slice(1);
						return item.name.official.includes(`${name}`);
					}
					return copy;
				})
			);
		}
	};

	useEffect(() => {
		getAllCountries();
	}, []);

	return (
		<div className=" bg-very-light-grey-l h-full px-4 sm:px-10 sm:mb-0 mb-4 ">
			{/* Search and filter row */}
			<div className=" flex-wrap items-center sm:flex sm:justify-between mt-4">
				{/* Search */}
				{/* implement search */}
				<div className="bg-white border rounded-md  flex flex-row items-center w-full sm:w-[300px] md:w-[400px] h-12 p-4 shadow-xl">
					<AiOutlineSearch
						size={20}
						className="text-gray-400 mr-3"
					></AiOutlineSearch>
					<input
						className="outline-none w-full"
						type="text"
						name=""
						id=""
						placeholder="Search for a country.."
						onChange={(e) => {
							if (e.target.value !== "") {
								nameSearch(e.target.value);
							}
						}}
					/>
				</div>
				{/* Filter */}
				<div>
					<button
						className="relative flex flex-row p-3 rounded-md mt-3  w-44 bg-white border shadow-xl cursor-pointer"
						onClick={() => {
							setShowFilter(!showFilter);
						}}
					>
						<span className="font-[600] text-sm ">Filter by Region</span>
						<RiArrowDropDownLine
							size={20}
							className="ml-4"
						></RiArrowDropDownLine>
					</button>
					{/* Drop down menu */}
					<div
						className={
							showFilter
								? "absolute bg-white w-44 border mt-1 rounded-md p-4 "
								: "hidden"
						}
					>
						<p
							className="font-semibold text-sm sm:text-base cursor-pointer hover:bg-blue-400 hover:text-white "
							onClick={() => {
								filterData("All");
								setShowFilter(!showFilter);
							}}
						>
							All
						</p>
						<p
							className="font-semibold text-sm sm:text-base cursor-pointer hover:bg-blue-400 hover:text-white "
							onClick={() => {
								filterData("Africa");
								setShowFilter(!showFilter);
							}}
						>
							Africa
						</p>
						<p
							className="font-semibold text-sm sm:text-base cursor-pointer hover:bg-blue-400 hover:text-white "
							onClick={() => {
								filterData("Americas");
								setShowFilter(!showFilter);
							}}
						>
							Americas
						</p>
						<p
							className="font-semibold text-sm sm:text-base cursor-pointer hover:bg-blue-400 hover:text-white "
							onClick={() => {
								filterData("Asia");
								setShowFilter(!showFilter);
							}}
						>
							Asia
						</p>
						<p
							className="font-semibold text-sm sm:text-base cursor-pointer hover:bg-blue-400 hover:text-white "
							onClick={() => {
								filterData("Europe");
								setShowFilter(!showFilter);
							}}
						>
							Europe
						</p>
						<p
							className="font-semibold text-sm sm:text-base cursor-pointer hover:bg-blue-400 hover:text-white "
							onClick={() => {
								filterData("Oceania");
								setShowFilter(!showFilter);
							}}
						>
							Oceania
						</p>
					</div>
				</div>
			</div>
			<div className="h-[628px] bg-very-light-grey-l">
				{/* body */}
				{loading ? (
					<Loading/>
				) : (
					<CountriesView countiresData={data} />
				)}
			</div>
		</div>
	);
};

export default HomePage;
