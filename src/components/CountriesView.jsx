import React from "react";
import { Link } from "react-router-dom";

const CountriesView = ({ countiresData }) => {
	return (
		<div className="w-full flex flex-col items-center  sm:grid sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 pt-14">
			{/* Country Component */}
			{countiresData.map((country) => (
				<Link to={`/country/${country.cca2}`}>
					<div
						key={country.cca2}
						className="w-64 bg-white shadow-lg mb-12 rounded-sm"
					>
						<img
							src={country.flags.svg}
							alt=""
							className="h-[150px] w-64 object-cover rounded-t-md"
						/>
						{/* container */}
						<div className="pb-8 pt-6 px-4">
							<h1 className="pb-4 font-bold">{country.name.common}</h1>
							<p>
								<span className="font-semibold">Population:</span>{" "}
								{country.population}
							</p>
							<p>
								<span className="font-semibold">Region:</span> {country.region}
							</p>
							<p>
								<span className="font-semibold">Capital:</span>{" "}
								{country.capital}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default CountriesView;
