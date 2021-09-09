import React, { useCallback, useEffect, useState } from "react";
import * as styles from "../styles/Testimonials.module.css";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useEmblaCarousel } from "embla-carousel/react";
import { DotButton, NextButton, PrevButton } from "./CarouselButtons";
const Testimonials = ({ testimonoal }) => {
	const [selectedIndex, setselectedIndex] = useState(0);
	const testimonialArray = Array(3).fill(testimonoal);
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
	});
	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on("select", onSlideChange);
	}, [emblaApi]);
	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	);
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	);
	const scrollTo = useCallback(
		(index) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);
	const onSlideChange = useCallback(() => {
		setselectedIndex(emblaApi.selectedScrollSnap);
	}, [emblaApi]);

	const renderSingleTestimonial = (item, key) => {
		return (
			<div className={`row embla__slide ${styles.testimonial}`} key={key}>
				{/* Image */}
				<div style={{ flex: 1 }} className="row">
					<div className={styles.avatar}>
						<Image src={item.userImage} alt="Health is Wealth" />
					</div>
					{/* Name */}
					<div className={styles.userInfoUnit}>
						<h3>{item.userName}</h3>
						<p>{item.userSubHeading}</p>
					</div>
				</div>
				{/* Text */}
				<div className={`${styles.testimonialText}`}>
					<p>{`" ${item.reviewText} "`}</p>
				</div>
			</div>
		);
	};
	const renderDots = () => {
		return (
			<div className={`row ${styles.dotContainer}`}>
				{testimonialArray.map((_, index) => {
					return (
						<DotButton
							key={index}
							selected={index == selectedIndex}
							clickHandler={() => scrollTo(index)}
						/>
					);
				})}
			</div>
		);
	};
	return (
		<section className={"margin-on-side"} style={{ marginBottom: "4rem" }}>
			<div className={`${styles.testimonialContainer}`}>
				{/* Heading */}
				<div className="row center">
					<SectionHeading
						headingTitle="What our customer are saying"
						color={"#fff"}
					/>
				</div>
				<div className="embla" ref={emblaRef}>
					<div className="embla__container">
						{testimonialArray.map((item, index) =>
							renderSingleTestimonial(item, index)
						)}
					</div>
				</div>
			</div>
			<div className={`${styles.carouselNavContainer} row center`}>
				<PrevButton clickHandler={scrollPrev} />
				{renderDots()}

				<NextButton clickHandler={scrollNext} />
			</div>
		</section>
	);
};

export default Testimonials;
