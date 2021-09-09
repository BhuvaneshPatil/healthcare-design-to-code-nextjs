import React from "react";
import * as styles from "../styles/Footer.module.css";
const FooterLinkSet = ({ linkSet }) => {
	return (
		<div className={`${styles.linkGroup}`}>
			<h4>Heading</h4>
			<div>
				<ul className={`${styles.footerLinks}`}>
					{Array(4)
						.fill("Link")
						.map((item, index) => {
							return (
								<li key={index}>
									<a href="/">{item}</a>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default FooterLinkSet;
