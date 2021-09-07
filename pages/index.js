import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import data from "../constants/data";
export default function Home(props) {
	return (
		<div>
			<Navbar />
			{/* Hero Section */}
			<Hero />
			{/* Our Services Section */}
			<Services services={data.services} />
			{/* Advantages */}
			<Advantages />
			{/* To do - Carousel */}
			<Testimonials testimonoal={data.testimonial} />
			{/* Articles */}
			<Articles articles={data.articles} />
		</div>
	);
}
