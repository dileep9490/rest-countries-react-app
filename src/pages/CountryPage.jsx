import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Loading from "../components/Loading";
const CountryPage = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const code = useParams().countrycode;
	const getCountryData = async () => {
		setIsLoading(true);
		const req = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
		const reqData = await req.json();
		setData(reqData[0]);
		setIsLoading(false);
	};

	useEffect(() => {
		getCountryData();
	}, []);

	return (
		<div>
			{isLoading ? (
				<Loading />
			) : (
				<div className="px-6 ">
					<Link to={"/"}>
						<div className="flex items-center border shadow-md px-4 py-2 h-fit w-fit mt-8 mb-16">
							<BiArrowBack size={20} className="mr-4" />
							Back
						</div>
					</Link>

					<div className="flex flex-col md:flex-row ">
						<img
							className="md:w-[40rem] md:h-[20rem] object-cover"
							src={data.flags?.svg}
							alt=""
						/>
						<div className="flex flex-col md:pl-28">
							<h1 className="font-bold text-xl mt-6 mb-6">
								{data.name?.common}
							</h1>
							<p className="mb-1">
								<span className="font-semibold"> Population :</span>{" "}
								{data.population}
							</p>
							<p className="mb-1">
								<span className="font-semibold"> Region :</span> {data.region}
							</p>
							<p className="mb-1">
								<span className="font-semibold"> Sub Region :</span>{" "}
								{data.subregion}
							</p>
							<p className="mb-1">
								<span className="font-semibold"> Capital :</span> {data.capital}
							</p>
							<p className="mb-1">
								<span className="font-semibold"> Top Level Domain :</span>{" "}
								{data.tld}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryPage;
