import React from "react";
import * as styles from "../styles/Footer.module.css";
import FooterLinkSet from "./FooterLinkSet";
const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={`margin-on-side ${styles.footerItemsRow}`}>
				{/* Company Info */}
				<div className={`${styles.companyInfo}`}>
					<div className={styles.branding}>
						{/* logo */}
						<div className={styles.logoFooter}>T</div>
						{/* Name */}
						<h3>Trafalgar</h3>
					</div>
					{/* description */}
					<p className={`${styles.companyDes}`}>
						Trafalgar provides progressive, and affordable
						healthcare, accessible on mobile and online for everyone
					</p>
					<p>©Trafalgar PTY LTD 2020. All rights reserved</p>
				</div>
				{/* Link Set 1 */}
				<FooterLinkSet />
				{/* Link Set 2 */}
				<FooterLinkSet />
				{/* Link Set 3 */}
				<FooterLinkSet />
			</div>
		</footer>
	);
};

export default Footer;
