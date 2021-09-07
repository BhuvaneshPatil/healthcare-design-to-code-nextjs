import React from "react";
import SectionHeading from "./SectionHeading";
import * as styles from "../styles/Services.module.css";
import ServiceCard from "./ServiceCard";
import images from "../constants/images";
import Button from "./Button";
const Services = ({ services }) => {
	return (
		<section className={styles.container}>
			<div className="margin-on-side">
				{/* Section Heading */}
				<SectionHeading headingTitle="Our Services" />
				{/* Section Description */}
				<p className={`${styles.servicesDes} text-light-gray`}>
					We provide to you the best choiches for you. Adjust it to
					your health needs and make sure your undergo treatment with
					our highly qualified doctors you can consult with us which
					type of service is suitable for your health
				</p>
				{/* Section List - we will map through array and render a card for each item */}
				<div className={`${styles.serviceList} row`}>
					{services.map((item) => {
						return <ServiceCard service={item} key={item.id} />;
					})}
				</div>
				<div className="row center">
					<Button text="Learn More" />
				</div>
			</div>
		</section>
	);
};

export default Services;
