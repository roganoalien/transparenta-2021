import { useState, useContext, useEffect } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { LottieHolder } from '../components/LottieHolder';
import { LanguageContext } from '../globalState';

// LOTTIES
import one_left from '../animations/home/01_l.json'; // una necesidad izquierda
import two_right from '../animations/home/02_r.json'; // necesidad rombo
import three_m from '../animations/home/03_m.json'; // lo que hacemos
import four_left from '../animations/home/04_l.json'; // barra

SwiperCore.use([Autoplay, Pagination]);

const tempImages = [
	'aleatica.png',
	'posadas.png',
	'fideicomisos.png',
	'desarrollador.png'
];

export default function Home({ data, windowWidth }) {
	const [position, setPosition] = useState(0);
	const [transitioning, setTransitioning] = useState(false);
	const clients = data.clients;
	const { lang } = useContext(LanguageContext);

	// useEffect(() => {
	// setWidth(window.innerWidth);
	// const handleResize = () => setWidth(window.innerWidth);
	// window.addEventListener('resize', handleResize);
	// return () => window.removeEventListener('resize', handleResize);
	// }, []);

	const changeClient = (up) => {
		setTransitioning(true);
		setTimeout(function () {
			if (up) {
				// if (position + 1 < clientData.length) {
				if (position + 1 < clients.length) {
					setPosition(position + 1);
				} else {
					setPosition(0);
				}
			} else {
				if (position !== 0) {
					setPosition(position - 1);
				} else {
					// setPosition(clientData.length - 1);
					setPosition(clients.length - 1);
				}
			}
			setTimeout(function () {
				setTransitioning(false);
			}, 100);
		}, 500);
	};
	return (
		<>
			<Head>
				<title>{data['title_' + lang]}</title>
			</Head>
			<motion.section
				key="page-index"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="necesidad-section w-screen relative px-35 mt-90 lg:px-0 z-30 mb-20"
			>
				<div className="container mx-auto flex items-stretch justify-start flex-wrap mt-90x2 lg:mt-0">
					<div className="left-animation-container w-full lg:w-2/12 xl:w-3/12 hidden lg:flex items-start justify-start pointer-events-none">
						<div style={{ width: '100%' }}>
							<LottieHolder animationData={one_left} />
						</div>
					</div>
					<div className="center-content w-full lg:w-9/12 xl:w-7/12 h-auto flex flex-col items-start justify-start lg:justify-center relative z-50">
						<h1 className="text-4xl lg:text-5xl text-main font-bold w-full">
							{data['title_' + lang]}
						</h1>
						<p className="text-black text-2xl lg:text-3xl mt-4 lg:pt-4 lg:pl-10 font-semibold lg:font-bold w-full lg:w-9/12">
							{data['subtitle_' + lang]}
						</p>
					</div>
					<div className="right-content-animation w-full lg:w-1/12 xl:w-2/12 h-auto hidden lg:flex items-start justify-start relative pointer-events-none">
						{/* <div
							className="absolute top-0 lg:-top-20 xl:top-0 right-0"
							style={{
								width: 550,
								transform: 'translate(15%, -10%)'
							}}
						>
							<LottieHolder animationData={one_right} />
						</div> */}
						<div
							className="absolute bottom-0 lg:-bottom-32 xl:-bottom-10 -right-10"
							style={{
								width: windowWidth < 1024 ? 180 : 340
							}}
						>
							<LottieHolder animationData={two_right} />
						</div>
					</div>
				</div>
			</motion.section>
			<motion.section
				key="page-index-about"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="about-section w-screen h-auto flex items-start justify-center pt-8 lg:pt-16 px-35 lg:px-20"
			>
				<article className="section-container container mx-auto flex flex-wrap items-stretch justify-center">
					<div className="left-side w-full lg:w-6/12">
						<h2 className="text-2xl lg:text-3xl font-bold text-main">
							{data['what_' + lang]}
						</h2>
						<p className="text-black mt-4 lg:mt-8 pr-0 lg:pr-10 font-medium">
							{data['whatDescription_' + lang]}
						</p>
						<img
							className="block lg:hidden my-10"
							src="/images/about-one.svg"
							alt="About 1"
						/>
						<h2 className="text-2xl lg:text-3xl font-bold text-main mt-20">
							{data['why_' + lang]}
						</h2>
						<p className="text-black mt-4 lg:mt-8 pr-0 lg:pr-10 font-medium">
							{data['whyDescription_' + lang]}
						</p>
						<img
							src="/images/about-three.svg"
							alt="About 3"
							className="block lg:hidden my-10"
						/>
					</div>
					<div className="right-side w-full md:w-6/12 px-10 pt-16 hidden lg:flex items-center justify-end">
						<div className="-mt-20">
							<LottieHolder animationData={three_m} />
						</div>
					</div>
				</article>
			</motion.section>
			<section className="just-animations relative h-auto hidden lg:flex lg:mt-12 items-center justify-center">
				<div style={{ width: 400 }}>
					<LottieHolder animationData={four_left} />
				</div>
			</section>
			<section className="people w-screen container mx-auto flex items-center justify-center flex-wrap pb-40 px-35 lg:px-5 mt-14">
				<h2 className="text-2xl lg:text-3xl font-bold text-main w-full">
					{lang === 'es' ? 'Clientes' : 'Clients'}
				</h2>
				<article className="w-full flex flex-wrap items-stretch justify-center mt-10">
					<div className="w-full lg:w-6/12 flex flex-col items-start justify-start relative order-2 lg:order-1">
						<AnimatePresence>
							<motion.h3
								key="people-index-h3"
								animate={{
									opacity: transitioning ? 0 : 1,
									y: transitioning ? '10%' : 0
								}}
								className="text-black font-bold text-2xl lg:text-xl text-center lg:text-left w-full"
							>
								{clients[position].name}
							</motion.h3>
							<motion.p
								key="people-index-p"
								animate={{
									opacity: transitioning ? 0 : 1,
									y: transitioning ? '10%' : 0
								}}
								transition={{
									delay: 0.15
								}}
								className="text-black mt-5 italic text-lg lg:text-base pr-0 lg:pr-16"
							>
								"{clients[position][`testimony_${lang}`]}"
							</motion.p>
						</AnimatePresence>
						<div className="switchClients flex items-center justify-center flex-wrap absolute -bottom-32 lg:bottom-0 right-1/2 lg:right-0 transform translate-x-1/2 lg:translate-x-0">
							<div
								onClick={() => changeClient(false)}
								className="bg-white border-2 border-black py-3 lg:py-1 px-4 lg:px-2 mr-4 hover:bg-main shadow-btnRight hover:shadow-btnRightPressed transition-shadow duration-150 cursor-pointer"
							>
								<img
									src="/arrow-l.svg"
									alt="Arrow Left"
									width="8"
								/>
							</div>
							<div
								onClick={() => changeClient(true)}
								className="bg-white border-2 border-black py-3 lg:py-1 px-4 lg:px-2 mr-4 hover:bg-main shadow-btnRight hover:shadow-btnRightPressed transition-shadow duration-150 cursor-pointer"
							>
								<img
									src="/arrow-r.svg"
									alt="Arrow Right"
									width="8"
								/>
							</div>
							<div className="w-full flex lg:hidden items-center justify-center mt-5">
								{clients.map((item, index) => (
									<div
										className={`border-2 border-black h-4 w-4 ${
											index === clients.length - 1
												? 'mr-0'
												: 'mr-4'
										} ${
											index === position
												? 'bg-black'
												: 'bg-transparent'
										}`}
										key={`activePeople-${index}`}
									></div>
								))}
							</div>
						</div>
					</div>
					<div className="w-full lg:w-6/12 pl-0 lg:pl-10 pt-32 lg:pt-14 order-1 lg:order-2 flex justify-center items-center mb-10 lg:mb-0 mt-0 lg:-mt-12">
						<div
							style={{ height: 250, width: 190 }}
							className="relative"
						>
							<img
								className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 z-20"
								src="/animations/client-circle.svg"
								alt="Client Circle"
								width="190"
								height="auto"
							/>
							<img
								className="relative z-10"
								src="/animations/client-holder.svg"
								alt="Client Holder"
								width="190"
								height="250"
							/>
							<div
								className="overflow-hidden absolute left-0 top-0 bg-white flex items-center justify-center"
								style={{ height: 184, width: 190 }}
							>
								<AnimatePresence>
									<motion.img
										key="people-index-img"
										className="object-contain w-10/12 h-full"
										animate={{
											opacity: transitioning ? 0 : 1
										}}
										// src={
										// 	process.env.API_URL +
										// 	clients[position].image.formats
										// 		.thumbnail.url
										// }
										src={`/tempClients/${tempImages[position]}`}
										alt={clients[position].name}
									/>
								</AnimatePresence>
							</div>
						</div>
					</div>
				</article>
			</section>
		</>
	);
}

export async function getServerSideProps() {
	const data = await fetch(`${process.env.API_URL}/home`).then((res) =>
		res.json()
	);
	// const footer = await fetch(`${process.env.API_URL}/footer`).then((res) =>
	// 	res.json()
	// );
	if (!data) {
		return {
			props: { error: 404, status: 500 }
		};
	}
	return {
		props: {
			data
			// footer
		}
	};
}
