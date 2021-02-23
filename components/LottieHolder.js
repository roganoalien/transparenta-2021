import React, { useState, useEffect, useRef } from 'react';
import handleViewport from 'react-in-viewport';
// import Lottie from 'lottie-react';
import Lottie from 'react-lottie';

function TheLottie({ animationData, inViewport, forwardedRef, addClass }) {
	// const [paused, setPaused] = useState(true);
	// const elem = useRef();

	// const changePausedStatus = () => {
	// 	const scroll = window.scrollY || window.pageYOffset;
	// 	const boundsTop = elem.current.getBoundingClientRect().top + scroll;
	// 	const viewport = {
	// 		bottom: scroll + window.innerHeight,
	// 		top: scroll
	// 	};
	// 	const bounds = {
	// 		bottom: boundsTop + elem.current.clientHeight,
	// 		top: boundsTop
	// 	};
	// 	if (bounds.bottom > viewport.top || bounds.top < viewport) {
	// 		console.log('Reproduce animación');
	// 		setPaused(false);
	// 	} else {
	// 		console.log('Detiene animación');
	// 		setPaused(true);
	// 	}
	// };

	// useEffect(() => {
	// 	changePausedStatus();
	// 	document.addEventListener('scroll', changePausedStatus);
	// 	window.addEventListener('resize', changePausedStatus);
	// 	window.addEventListener('orientationchange', changePausedStatus);
	// 	return () => {
	// 		document.removeEventListener('scroll', changePausedStatus);
	// 		window.removeEventListener('resize', changePausedStatus);
	// 		window.removeEventListener('orientationchange', changePausedStatus);
	// 	};
	// }, []);

	return (
		<div
			className={`holder-lottie-item pointer-events-none ${addClass}`}
			// ref={elem}
			ref={forwardedRef}
		>
			{/* {paused && <Lottie animationData={animationData}  />} */}
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData
				}}
				isPaused={inViewport ? false : true}
			/>
		</div>
	);
}

export const LottieHolder = handleViewport(TheLottie);
