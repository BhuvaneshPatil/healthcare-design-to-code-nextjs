// next button
// prev button
// dots
import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
export const NextButton = ({ clickHandler, isEnabled }) => {
	return (
		<div onClick={clickHandler} style={{ cursor: "pointer" }}>
			<ArrowRight color={"#458ff6"} />
		</div>
	);
};
export const PrevButton = ({ clickHandler, isEnabled }) => {
	return (
		<div onClick={clickHandler} style={{ cursor: "pointer" }}>
			<ArrowLeft color={"#458ff6"} />
		</div>
	);
};
export const DotButton = ({ clickHandler, selected }) => {
	return (
		<div
			onClick={clickHandler}
			className={`dot ${selected ? "selected" : ""}`}
		></div>
	);
};
