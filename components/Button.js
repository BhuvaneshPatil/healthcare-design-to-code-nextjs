import React from "react";
import * as styles from "../styles/Button.module.css";
const Button = ({ fill = "outline", extraStyles }) => {
	const textStyle = fill === "outline" ? "text-blue" : "text-white";
	const background = fill === "outline" ? "" : "blue-background";
	return (
		<div>
			<button
				className={`${styles.btn} ${textStyle} ${background}`}
				style={extraStyles}
			>
				Consult Today
			</button>
		</div>
	);
};

export default Button;
