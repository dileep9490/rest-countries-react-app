import Navbar from "./components/Navbar";
import CountryPage from "./pages/CountryPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/country/:countrycode" element={<CountryPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
