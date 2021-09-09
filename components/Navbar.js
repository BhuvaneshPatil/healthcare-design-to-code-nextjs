import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../constants/images";
import * as styles from "../styles/Navbar.module.css";
import { HamburgerButton } from "react-hamburger-button";
const Navbar = () => {
	const [hidden, setHindden] = React.useState(true);
	return (
		<nav>
			<div className={`${styles.navContainer} margin-on-side row`}>
				{/* logo */}
				<Image src={images.logo} />
				{/* nav-links */}
				<ul className={`row ${styles.navLinks}`}>
					<li
						className={`${styles.navLink} ${styles.activeNavLink} text-dark-gray`}
					>
						<Link href="/">Home</Link>
					</li>
					<li className={`${styles.navLink} text-dark-gray`}>
						<Link href="/">Find a doctor</Link>
					</li>
					<li className={`${styles.navLink} text-dark-gray`}>
						<Link href="/">Apps</Link>
					</li>
					<li className={`${styles.navLink} text-dark-gray`}>
						<Link href="/">Testimonials</Link>
					</li>
					<li className={`${styles.navLink} text-dark-gray`}>
						<Link href="/">About us</Link>
					</li>
				</ul>
				<HamburgerButton
					strokeWidth={3}
					open={!hidden}
					animationDuration={0.5}
					onClick={() =>
						setHindden((current) => {
							return !current;
						})
					}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
