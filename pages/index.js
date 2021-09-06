import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import data from "../constants/data";
export default function Home(props) {
	console.log(data);
	return (
		<div>
			<Navbar />
			{/* Hero Section */}
			<Hero />
			{/* Our Services Section */}
			<Services services={data.services} />
		</div>
	);
}
