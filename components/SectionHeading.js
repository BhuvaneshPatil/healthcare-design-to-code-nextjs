import React from "react";
import * as styles from "../styles/SectonHeading.module.css";
const SectionHeading = ({ headingTitle = "Placeholder", color = "black" }) => {
	return (
		<div className={`center row`} style={{ borderColor: color, color }}>
			<div className={styles.headingContainer}>
				<h2 className={styles.heading}>{headingTitle}</h2>
			</div>
		</div>
	);
};

export default SectionHeading;
