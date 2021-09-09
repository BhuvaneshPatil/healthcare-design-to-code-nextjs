import React from "react";
import Image from "next/image";
import * as styles from "../styles/Hero.module.css";
import images from "../constants/images";
import Button from "./Button";
const Hero = () => {
	return (
		<section className={`${styles.heroContainer} row margin-on-side`}>
			{/* dot dot pattern */}
			{/* left section */}
			<div className={`${styles.heroInfo}`}>
				{/* heading */}
				<h1 className={styles.heroHeading}>
					Virtual healthcare for you
				</h1>
				{/* details */}
				<p className={`${styles.heroDes} text-light-gray`}>
					Trafalgar provides progressive, and affordable healthcare,
					accessible on mobile and online for everyone
				</p>

				{/* Button - custom button */}
				<Button fill="fill" text={"Consult Today"} />
			</div>

			{/* right section */}
			<div className={`${styles.heroImageContainer}`}>
				<Image src={images.heroImage} alt="Health is Wealth" />
			</div>
		</section>
	);
};

export default Hero;
