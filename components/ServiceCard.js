import React from "react";
import Image from "next/image";
import * as styles from "../styles/ServiceCard.module.css";
const ServiceCard = ({ service }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={`${styles.imageContainer}`}>
				<div>
					<Image src={service.picture} />
				</div>
			</div>
			<h3 className={`${styles.cardHeading}`}>{service.title}</h3>
			<p className={`${styles.cardDes} text-light-gray`}>
				{service.description}
			</p>
		</div>
	);
};

export default ServiceCard;
