import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home(props) {
	return (
		<div>
			<Navbar />
			<Hero />
		</div>
	);
}
export async function getServerSideProps() {
	return {
		props: {}, // will be passed to the page component as props
	};
}
