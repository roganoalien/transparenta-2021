import { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LottieHolder } from '../components/LottieHolder';
import { LanguageContext } from '../globalState';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
const _ = require('lodash');

// LOTTIES
import one_right from '../animations/producto/producto.json';
import two_m from '../animations/producto/barra.json';
import three from '../animations/producto/modulos.json';
import four from '../animations/producto/beneficios.json';
import greenLine from '../animations/producto/02_m.json';

SwiperCore.use([Autoplay, Pagination]);

const AnimTopRight = styled.img`
	transform: translate(0, -25%);
`;

export default function Producto({ data, windowWidth, imageURL }) {
	// const [width, setWidth] = useState(null);
	const { lang } = useContext(LanguageContext);
	const functionalities = _.sortBy(data.functionalities, function (o) {
		return o.id;
	});
	const licenses = _.sortBy(data.licenses, function (o) {
		return o.id;
	});

	// useEffect(() => {
	// 	setWidth(window.innerWidth);
	// 	const handleResize = () => setWidth(window.innerWidth);
	// 	window.addEventListener('resize', handleResize);
	// 	return () => window.removeEventListener('resize', handleResize);
	// }, []);

	return (
		<>
			<Head>
				<title>{data['title_' + lang]}</title>
			</Head>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="flex flex-wrap items-center justify-center px-35 lg:px-0 mt-90x2 lg:mt-20"
			>
				<div className="container mx-auto flex flex-wrap items-center justify-center px-0 md:px-35 lg:px-18">
					<section className="header w-full lg:mt-0 flex items-start justify-center flex-wrap">
						<article className="w-full lg:w-8/12">
							<h1 className="text-4xl lg:text-5xl text-main font-bold w-full">
								{data['title_' + lang]}
							</h1>
							<div className="text-black text-lg mt-4 w-full font-medium lg:font-bold pr-0 lg:pr-20">
								<ReactMarkdown plugins={[gfm]}>
									{data['subtitle_' + lang]}
								</ReactMarkdown>
							</div>
						</article>
						<article className="w-full lg:w-4/12 relative hidden lg:flex items-center justify-content pointer-events-none">
							<div className="mt-0 lg:-mt-24 relative">
								<LottieHolder
									addClass="lg:transform lg:scale-110 xl:scale-100"
									animationData={one_right}
								/>
							</div>
						</article>
						<article className="w-full flex items-center justify-center mt-2 mb-5">
							<div className="max-w-md">
								{/* <LottieHolder animationData={two_m} /> */}
								<LottieHolder animationData={greenLine} />
							</div>
						</article>
					</section>
					<section className="header w-full mb-6 lg:mb-10 mt-0 flex items-start justify-center flex-wrap">
						<article className="w-full lg:w-6/12">
							<h2 className="text-2xl lg:text-3xl font-bold text-main">
								{data['modules_' + lang]}
							</h2>
							<div className="markdown-container2">
								<ReactMarkdown plugins={[gfm]}>
									{data['modulesDescription_' + lang]}
								</ReactMarkdown>
							</div>
						</article>
						<article className="w-full lg:w-6/12 hidden lg:flex flex-col items-center justify-center">
							<div className="max-w-sm">
								<LottieHolder animationData={three} />
							</div>
						</article>
					</section>
					<section className="benefits w-full mb-4 mt-0 lg:mt-4 flex items-stretch justify-center flex-wrap">
						<article className="w-full lg:w-7/12 order-1 lg:order-2">
							<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20">
								{data['benefits_' + lang]}
							</h2>
							<div className="markdown-container">
								<ReactMarkdown plugins={[gfm]}>
									{data['benefitsDescription_' + lang]}
								</ReactMarkdown>
							</div>
						</article>
						<article className="w-full lg:w-5/12 flex flex-col items-center justify-center order-2 lg:order-1 lg:mt-0">
							<div className="w-6/12 lg:w-full max-w-xs">
								<LottieHolder animationData={four} />
							</div>
						</article>
					</section>
					<section className="funcionalidad w-full mb-5 lg:mb-0 mt-5 lg:mt-16 flex items-start justify-center flex-wrap">
						<header className="w-full flex items-center justify-center flex-wrap">
							<h2 className="w-auto text-3xl lg:text-4xl text-main font-bold">
								{data['functionality_' + lang]}
							</h2>
							{/* <button className="bg-white border-2 border-black py-1 px-2 lg:px-4 mt-5 lg:mt-0 font-bold shadow-transparentaSmall hover:shadow-none transform scale-100 hover:scale-95 transition duration-200 ease-in-out">
								Mostrar más
							</button> */}
						</header>
						<article className="w-full flex items-stretch justify-center pt-10 lg:pt-20">
							{windowWidth > 1023 ? (
								<>
									{functionalities.map((item) => (
										<div
											key={item['title_' + lang]}
											className="item w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-start lg:px-5 xl:px-0"
										>
											<div className="holder border-3 border-black px-8 py-12 shadow-transparenta">
												<img
													src="/animations/producto-anim-func.svg"
													alt="Funcionalidad1"
													width="300"
												/>
											</div>
											<p className="font-bold px-6 xl:px-16 mt-10 text-center text-sm">
												{item['description_' + lang]}
											</p>
										</div>
									))}
								</>
							) : (
								<Swiper
									className="w-full the-product-holder overflow-hidden"
									spaceBetween={0}
									slidesPerView={
										windowWidth > 600 && windowWidth < 10241
											? 2
											: 1
									}
									centeredSlides={
										windowWidth > 600 && windowWidth < 10241
											? false
											: true
									}
									grabCursor={true}
									longSwipes={false}
									autoplay={{
										delay: 3000,
										disableOnInteraction: false
									}}
									pagination={{ clickable: true }}
								>
									{functionalities.map((item) => (
										<SwiperSlide
											key={item['title_' + lang]}
											className="flex flex-col items-center justify-start w-full sm:max-w-sm lg:w-auto px-20 sm:px-5 lg:px-0"
										>
											<div className="holder border-3 border-black px-8 py-12 shadow-transparenta mx-10">
												<img
													src="/animations/producto-anim-func.svg"
													alt="Funcionalidad1"
													width="300"
												/>
											</div>
											<p className="font-normal mt-10 px-14 text-center">
												{item['description_' + lang]}
											</p>
										</SwiperSlide>
									))}
								</Swiper>
							)}
						</article>
					</section>
					<section className="licencias w-full mb-10 lg:mb-40 mt-0 lg:mt-16 flex items-start justify-center flex-wrap">
						<header className="w-full flex items-center justify-center">
							<h2 className="w-auto text-3xl lg:text-4xl text-main font-bold">
								{data['licenses_' + lang]}
							</h2>
						</header>
						<article className="w-full flex items-stretch justify-center pt-4 lg:pt-16">
							{windowWidth > 1023 ? (
								<div className="w-full flex items-stretch justify-center">
									{licenses.map((item) => (
										<div
											key={item['title_' + lang]}
											className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch"
										>
											<div className="holder border-3 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
												<p className="w-full font-bold text-lg lg:text-xl text-center mb-2">
													{item['title_' + lang]}
												</p>
												<img
													className="px-8"
													src={
														imageURL +
														item.image.url
													}
													alt={item['title_' + lang]}
												/>
												{/* <LottieHolder
														animationData={
															item.animation
														}
													/> */}
												{/* </img> */}
												<p className="w-full text-lg lg:text-xl text-center mt-2">
													{item['price_' + lang]}
												</p>
											</div>
										</div>
									))}
								</div>
							) : (
								<>
									<Swiper
										className="w-full the-license"
										spaceBetween={0}
										slidesPerView={
											windowWidth > 600 &&
											windowWidth < 10241
												? 2
												: 1
										}
										centeredSlides={
											windowWidth > 600 &&
											windowWidth < 10241
												? false
												: true
										}
										grabCursor={true}
										longSwipes={false}
										autoplay={{
											delay: 3000,
											disableOnInteraction: false
										}}
										pagination={{ clickable: true }}
									>
										{licenses.map((item) => (
											<SwiperSlide
												key={item['title_' + lang]}
												className="item w-full flex flex-col items-center justify-start px-4 self-stretch"
											>
												<div className="holder border-3 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full mx-12 max-w-xxs sm:max-w-full">
													<p className="w-full font-bold text-lg text-center mb-8">
														{item['title_' + lang]}
													</p>
													<img
														src={
															imageURL +
															item.image.url
														}
														alt={
															item[
																'title_' + lang
															]
														}
														className="w-full"
														style={{
															maxWidth: 181
														}}
													/>
													{/* <LottieHolder
															animationData={
																item.animation
															}
														/> */}
													{/* </div> */}
													<p className="w-full text-lg text-center mt-8">
														{item['price_' + lang]}
													</p>
												</div>
											</SwiperSlide>
										))}
									</Swiper>
								</>
							)}
						</article>
					</section>
				</div>
			</motion.main>
		</>
	);
}

export async function getServerSideProps(context) {
	const data = await fetch(`${process.env.API_URL}/product`).then((res) =>
		res.json()
	);
	if (!data) {
		return {
			props: { error: 404, status: 500 }
		};
	}
	return {
		props: {
			data,
			imageURL: process.env.API_URL
		}
	};
}
