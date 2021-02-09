import { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LottieHolder } from '../components/LottieHolder';
import { LanguageContext } from '../globalState';
// import Lottie from 'lottie-react';

// LOTTIES
// import one_right from '../animations/home/01_r.json';
import one_left from '../animations/home/01_l.json'; // una necesidad izquierda
// import two_left from '../animations/home/02_l.json';
import two_right from '../animations/home/02_r.json'; // necesidad rombo
import three_m from '../animations/home/03_m.json'; // lo que hacemos
import four_left from '../animations/home/04_l.json'; // barra
// import four_right from '../animations/home/04_r.json';

SwiperCore.use([Autoplay, Pagination]);

// const clientData = [
// 	{
// 		client: 'Fideicomiso Fuerza México',
// 		description:
// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a magni dolorum voluptates repellendus blanditiis molestias incidunt aut, corrupti, porro possimus ut alias accusamus sit molestiae at, expedita sapiente dicta!',
// 		img:
// 			'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
// 		name: 'Ximena Suárez'
// 	},
// 	{
// 		client: 'Río Arronte',
// 		description:
// 			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam blanditiis, aut quisquam laboriosam soluta assumenda facilis voluptates ex esse quae.',
// 		img: 'https://randomuser.me/api/portraits/men/36.jpg',
// 		name: 'Rodrigo García'
// 	},
// 	{
// 		client: 'ALEATICA',
// 		description:
// 			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam blanditiis, aut quisquam laboriosam.',
// 		img: 'https://randomuser.me/api/portraits/men/1.jpg',
// 		name: 'John Doe'
// 	},
// 	{
// 		client: 'Desarrollador Confiable',
// 		description:
// 			'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
// 		img:
// 			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
// 		name: 'Mary Jane'
// 	}
// ];
// const JaLeftContainer = styled.div`
// 	transform: translate(-7%, -50%);
// `;
// const JaRightContainer = styled.div`
// 	transform: translate(-40%, -50%);
// 	@media (max-width: 1023px) {
// 		transform: translate(-5%, -50%);
// 	}
// `;

// const FaceHolder = styled.div`
// 	background-size: cover !important;
// 	background-repeat: no-repeat !important;
// 	height: 250px;
// 	width: 190px;
// 	@media (max-width: 1023px) {
// 		position: relative;
// 	}
// `;
// const FaceImage = styled.img`
// 	object-fit: cover;
// 	height: 200px;
// 	width: 190px;
// 	z-index: -1;
// `;
// const FaceLines = styled.img`
// 	height: 50px;
// 	width: 190px;
// `;
// const FaceCircles = styled.img`
// 	transform: translate(55%, -55%);
// 	z-index: 10;
// 	@media (max-width: 1023px) {
// 		position: absolute;
// 		right: 0;
// 		top: 0;
// 		transform: translate(50%, -50%);
// 	}
// `;
// const PeopleBtnHolder = styled.div`
// 	bottom: 0px;
// 	right: 60px;
// 	position: absolute;
// 	@media (max-width: 1023px) {
// 		bottom: -120px;
// 		right: 50%;
// 		transform: translate(50%, 0);
// 	}
// `;
// const BtnShadow = styled.button`
// 	background: #f2f2f2;
// 	outline: none !important;
// 	position: relative;
// 	&:after {
// 		content: '';
// 		background: #484d51;
// 		height: 100%;
// 		left: 0;
// 		position: absolute;
// 		top: 0;
// 		transform: translate(6px, 6px);
// 		transition: all 0.15s ease-in-out;
// 		width: 100%;
// 		z-index: -1;
// 	}
// 	&:hover {
// 		&:after {
// 			transform: translate(4px, 4px);
// 		}
// 	}
// `;

export default function Home({ data, windowWidth }) {
	const [position, setPosition] = useState(0);
	const [transitioning, setTransitioning] = useState(false);
	const clients = data.clients;
	console.log('CLIENTS', clients);
	// const [width, setWidth] = useState(null);
	// const [es, setEs] = useState(null);
	const { lang } = useContext(LanguageContext);

	// useEffect(() => {
	// 	setWidth(window.innerWidth);
	// 	const handleResize = () => setWidth(window.innerWidth);
	// 	window.addEventListener('resize', handleResize);
	// 	return () => window.removeEventListener('resize', handleResize);
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
					{/* <div className="bottom-content w-full h-auto flex items-center justify-between mt-2 lg:-mt-10 xl:-mt-24"> */}
					{/* <div className="w-full lg:w-6/12 flex items-center justify-center">
							<div
								style={{
									width: windowWidth < 1024 ? 120 : 230
								}}
							>
								<LottieHolder animationData={two_left} />
							</div>
						</div> */}
					{/* <div className="w-full lg:w-6/12 flex items-center justify-center">
							<div
								style={{
									width: windowWidth < 1024 ? 180 : 340
								}}
							>
								<LottieHolder animationData={two_right} />
							</div>
						</div> */}
					{/* </div> */}
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
				{/* <JaLeftContainer
					className="top-1/2 left-0 absolute"
					style={{ width: 300 }}
				>
					<LottieHolder animationData={four_left} />
				</JaLeftContainer> */}
				<div
					// className="top-1/2 left-0 absolute"
					style={{ width: 400 }}
				>
					<LottieHolder animationData={four_left} />
				</div>
				{/* <JaRightContainer
					className="top-1/2 right-0 absolute "
					style={{ width: windowWidth < 1024 ? 180 : 260 }}
				>
					<LottieHolder animationData={four_right} />
				</JaRightContainer> */}
			</section>
			{/*<section className="clients w-screen container mx-auto flex flex-wrap items-center justify-center pt-0 lg:pt-20 pb-0 lg:pb-10 px-35 lg:px-0">
				<h2 className="text-2xl lg:text-3xl font-bold text-main w-full">
					{lang === 'es' ? 'Clientes' : 'Clients'}
				</h2>
				{windowWidth > 1024 ? (
					<div className="the-clients flex items-center justify-center w-full">
						<div className="w-full sm:w-1/2 lg:w-1/4 p-8">
							<img
								src="/clients/cliente-1.png"
								alt="Cliente 01"
							/>
						</div>
						<div className="w-full sm:w-1/2 lg:w-1/4 p-8">
							<img
								src="/clients/cliente-2.png"
								alt="Cliente 02"
							/>
						</div>
						<div className="w-full sm:w-1/2 lg:w-1/4 p-8">
							<img
								src="/clients/cliente-3.png"
								alt="Cliente 03"
							/>
						</div>
						<div className="w-full sm:w-1/2 lg:w-1/4 p-8">
							<img
								src="/clients/cliente-4.png"
								alt="Cliente 04"
							/>
						</div>
					</div>
				) : (
					// <div className="w-full flex items-center justify-content"></div>
					<Swiper
						className="w-full -mt-10"
						spaceBetween={0}
						slidesPerView={1}
						centeredSlides={true}
						grabCursor={true}
						longSwipes={false}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false
						}}
						pagination={{ clickable: true }}
					>
						<SwiperSlide className="flex items-start justify-center">
							<img
								src="/clients/cliente-1.png"
								alt="Cliente 01"
							/>
						</SwiperSlide>
						<SwiperSlide className="flex items-start justify-center">
							<img
								src="/clients/cliente-2.png"
								alt="Cliente 02"
							/>
						</SwiperSlide>
						<SwiperSlide className="flex items-start justify-center">
							<img
								src="/clients/cliente-3.png"
								alt="Cliente 03"
							/>
						</SwiperSlide>
						<SwiperSlide className="flex items-start justify-center">
							<img
								src="/clients/cliente-4.png"
								alt="Cliente 04"
							/>
						</SwiperSlide>
					</Swiper>
				)}
			</section> */}
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
							{/* <p className="text-main font-bold text-xl lg:text-sm text-center lg:text-left w-full">
								{server}
							</p> */}
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
						<div className="switchClients flex items-center justify-center flex-wrap absolute -bottom-32 right-1/2 transform translate-x-1/2">
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
										src={
											process.env.API_URL +
											clients[position].image.formats
												.thumbnail.url
										}
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
	if (!data) {
		return {
			props: { error: 404, status: 500 }
		};
	}
	return {
		props: {
			data
		}
	};
}
