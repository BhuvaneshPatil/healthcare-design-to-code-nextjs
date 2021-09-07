import React from "react";
import images from "../constants/images";
import * as styles from "../styles/Advantages.module.css";
import SingleAdvantage from "./SingleAdvantage";
const advantageData = [
	{
		title: "Leading healthcare providers",
		image: images.leadingHealthProvider,
		description:
			"Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
		buttonText: "Learn More",
	},
	{
		title: "Download our mobile apps",
		image: images.downloadApp,
		description:
			"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
		buttonText: "Download",
	},
];

const Advantages = () => {
	return (
		<section className={`${styles.advContainer} margin-on-side`}>
			<SingleAdvantage data={advantageData[0]} />
			<SingleAdvantage data={advantageData[1]} direction="rev" />
		</section>
	);
};

export default Advantages;
