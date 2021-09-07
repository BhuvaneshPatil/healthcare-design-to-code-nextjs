import React, { useCallback } from "react";
import * as styles from "../styles/Testimonials.module.css";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useEmblaCarousel } from "embla-carousel/react";
const Testimonials = ({ testimonoal }) => {
	const testimonialArray = Array(3).fill(testimonoal);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);
	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);
	const renderSingleTestimonial = (item) => {
		return (
			<div className={`row embla__slide ${styles.testimonial}`}>
				{/* Image */}
				<div style={{ flex: 1 }} className="row">
					<div className={styles.avatar}>
						<Image src={item.userImage} />
					</div>
					{/* Name */}
					<div className={styles.userInfoUnit}>
						<h3>{item.userName}</h3>
						<p>{item.userSubHeading}</p>
					</div>
				</div>
				{/* Text */}
				<div className={`${styles.testimonialText}`}>
					<p>" {item.reviewText} "</p>
				</div>
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
							renderSingleTestimonial(item)
						)}
					</div>
				</div>
			</div>
			<button class="embla__prev" onClick={scrollPrev}>
				Prev
			</button>
			<button class="embla__next" onClick={scrollNext}>
				Next
			</button>
		</section>
	);
};

export default Testimonials;
