import Advantages from "../components/Advantages";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import data from "../constants/data";
import Head from "next/head";
export default function Home(props) {
	return (
		<div>
			<Head>
				<title>Trafalgar - You health Partner</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link rel="shortcut icon" href="/public/favicon.ico" />
			</Head>
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
			{/* Footer */}
			<Footer />
		</div>
	);
}
export async function getStaticProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}
