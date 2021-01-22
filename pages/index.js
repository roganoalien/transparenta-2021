import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LottieHolder } from '../components/LottieHolder';
// import Lottie from 'lottie-react';

// LOTTIES
import one_right from '../animations/home/01_r.json';
import one_left from '../animations/home/01_l.json';
import two_left from '../animations/home/02_l.json';
import two_right from '../animations/home/02_r.json';
import three_m from '../animations/home/03_m.json';
import four_left from '../animations/home/04_l.json';
import four_right from '../animations/home/04_r.json';

SwiperCore.use([Autoplay, Pagination]);

const data = [
	{
		client: 'Fideicomiso Fuerza México',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a magni dolorum voluptates repellendus blanditiis molestias incidunt aut, corrupti, porro possimus ut alias accusamus sit molestiae at, expedita sapiente dicta!',
		img:
			'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
		name: 'Ximena Suárez'
	},
	{
		client: 'Río Arronte',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam blanditiis, aut quisquam laboriosam soluta assumenda facilis voluptates ex esse quae.',
		img: 'https://randomuser.me/api/portraits/men/36.jpg',
		name: 'Rodrigo García'
	},
	{
		client: 'ALEATICA',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam blanditiis, aut quisquam laboriosam.',
		img: 'https://randomuser.me/api/portraits/men/1.jpg',
		name: 'John Doe'
	},
	{
		client: 'Desarrollador Confiable',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
		img:
			'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
		name: 'Mary Jane'
	}
];

// const NecesidadSection = styled.article`
// 	height: calc(100vh - 106px);
// 	@media (max-width: 1023px) {
// 		height: auto;
// 	}
// `;

// const AniTopRight = styled.img`
// 	transform: translateX(15%);
// `;
// const AniTopRightContainer = styled.div`
// 	transform: translateX(15%);
// `;
// const AniBottomRight = styled.img`
// 	transform: translate(-50%, 50%);
// `;
// const AniBottomRightContainer = styled.div`
// 	transform: translate(-23%, 50%);
// `;
// const AniTopLeft = styled.img`
// 	transform: translate(80px, 80px);
// `;
// const AniTopLeftContainer = styled.div`
// 	transform: translate(10px, -10px);
// `;
// const AniBottomLeft = styled.img`
// 	transform: translate(300%, 80px);
// `;
// const AniBottomLeftContainer = styled.div`
// 	transform: translate(105%, 160px);
// `;
// const JaLeft = styled.img`
// 	transform: translate(-2px, -50%);
// `;
const JaLeftContainer = styled.div`
	transform: translate(-7%, -50%);
`;
// const JaRight = styled.img`
// 	transform: translate(-50%, -50%);
// `;
const JaRightContainer = styled.div`
	transform: translate(-5%, -50%);
`;

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

export default function Home() {
	const [position, setPosition] = useState(0);
	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const changeClient = (up) => {
		if (up) {
			if (position + 1 < data.length) {
				setPosition(position + 1);
			} else {
				setPosition(0);
			}
		} else {
			if (position !== 0) {
				setPosition(position - 1);
			} else {
				setPosition(data.length - 1);
			}
		}
	};
	return (
		<>
			<Head>
				<title>Transparenta</title>
			</Head>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="necesidad-section w-screen relative px-35 mt-90 lg:px-0 z-30"
			>
				<div className="container mx-auto flex items-stretch justify-start flex-wrap mt-90x2 lg:mt-0">
					<div className="left-animation-container w-full lg:w-2/12 xl:w-3/12 hidden lg:flex items-start justify-start">
						{/* <AniTopLeftContainer
						className="top-0 left-0 absolute hidden lg:block"
						style={{ width: 320 }}
					> */}
						<div style={{ width: '100%' }}>
							{/* <Lottie animationData={one_left} /> */}
							<LottieHolder animationData={one_left} />
						</div>
						{/* </AniTopLeftContainer> */}
					</div>
					<div className="center-content w-full lg:w-9/12 xl:w-7/12 h-auto flex flex-col items-start justify-start lg:justify-center relative z-50">
						<h1 className="text-4xl lg:text-5xl text-main font-bold w-full">
							Una necesidad actual
						</h1>
						<p className="text-black text-2xl lg:text-3xl mt-4 font-semibold lg:font-bold w-full lg:w-9/12">
							Comunica de manera innovadora e inteligente los
							datos que más le importan a tu comunidad.{' '}
						</p>
						{/* <div className="just-mobile lg:hidden w-full flex items-center justify-between mt-90">
							<img
								src="/animations/animation-left-bottom.svg"
								alt="Fake animation"
								width="60px"
								height="auto"
							/>
							<img
								src="/animations/animation-right-bottom.svg"
								alt="Fake animation"
								width="200px"
								height="auto"
							/>
						</div> */}
					</div>
					<div className="right-content-animation w-full lg:w-1/12 xl:w-2/12 h-auto hidden lg:flex items-start justify-start relative">
						<div
							className="absolute top-0 lg:-top-20 xl:top-0 right-0"
							style={{
								width: 550,
								transform: 'translate(15%, -10%)'
							}}
						>
							{/* <Lottie animationData={one_right} /> */}
							<LottieHolder animationData={one_right} />
						</div>
					</div>
					<div className="bottom-content w-full h-auto flex items-center justify-between mt-2 lg:-mt-10 xl:-mt-24">
						<div className="w-full lg:w-6/12 flex items-center justify-center">
							<div style={{ width: width < 1024 ? 120 : 230 }}>
								{/* <Lottie animationData={two_left} /> */}
								<LottieHolder animationData={two_left} />
							</div>
						</div>
						<div className="w-full lg:w-6/12 flex items-center justify-center">
							<div style={{ width: width < 1024 ? 180 : 340 }}>
								{/* <Lottie animationData={two_right} /> */}
								<LottieHolder animationData={two_right} />
							</div>
						</div>
					</div>
				</div>
			</motion.section>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="about-section w-screen h-auto flex items-start justify-center pt-8 lg:pt-16 px-35 lg:px-20"
			>
				<article className="section-container container mx-auto flex flex-wrap items-start justify-center">
					<div className="left-side w-full lg:w-6/12">
						<h2 className="text-2xl lg:text-3xl font-bold text-main">
							Lo que hacemos
						</h2>
						<p className="text-black mt-4 lg:mt-8 pr-0 lg:pr-10 font-medium">
							Construimos plataformas de transparencia que buscan
							abrir las líneas de comunicación entre
							organizaciones de todo tipo y comunidad, a través de
							herramientas sistematizadas de visualización y
							consultorías de transparencia ajustadas a la
							operación de las organizaciones.
						</p>
						<img
							className="block lg:hidden my-10"
							src="/images/about-one.svg"
							alt="About 1"
						/>
						<h2 className="text-2xl lg:text-3xl font-bold text-main mt-20">
							¿Por qué Transparenta?
						</h2>
						<p className="text-black mt-4 lg:mt-8 pr-0 lg:pr-10 font-medium">
							Generar un entorno de confianza alrededor del acceso
							y divulgación de la información. Buscamos ayudar a
							nuestros clientes a ofrecer mayor certeza y
							seguridad a sus inversionistas, stakeholders,
							beneficiarios, donadores, clientes o cualquier
							persona involucrada con su organización,
							identificando los datos más valiosos para estos
							grupos y transparentándolos con el contexto
							adecuado.
						</p>
						<img
							src="/images/about-three.svg"
							alt="About 3"
							className="block lg:hidden my-10"
						/>
					</div>
					<div className="right-side w-full md:w-6/12 px-10 pt-16 hidden lg:flex items-center justify-end">
						<div className="-mt-20">
							{/* <Lottie animationData={three_m} /> */}
							<LottieHolder animationData={three_m} />
						</div>
						{/* <img
							className="mb-10"
							src="/images/about-one.svg"
							alt="About 1"
						/>
						<img
							className="mb-10"
							src="/images/about-two.svg"
							alt="About 2"
						/>
						<img src="/images/about-three.svg" alt="About 3" /> */}
					</div>
				</article>
			</motion.section>
			<section className="just-animations relative h-auto hidden lg:block lg:mt-12">
				{/* <JaLeft
					src="/animations/jaleft.svg"
					alt="Fake animation"
					className="top-1/2 left-0 absolute"
					width="600"
				/> */}
				<JaLeftContainer
					className="top-1/2 left-0 absolute"
					style={{ width: 600 }}
				>
					{/* <Lottie animationData={four_left} /> */}
					<LottieHolder animationData={four_left} />
				</JaLeftContainer>
				{/* <JaRight
					src="/animations/jaright.svg"
					alt="Fake animation"
					className="top-1/2 right-0 absolute"
					width="100"
				/> */}
				<JaRightContainer
					className="top-1/2 right-0 absolute"
					style={{ width: 180 }}
				>
					{/* <Lottie animationData={four_right} /> */}
					<LottieHolder animationData={four_right} />
				</JaRightContainer>
			</section>
			<section className="clients w-screen container mx-auto flex flex-wrap items-center justify-center pt-0 lg:pt-20 pb-0 lg:pb-10 px-35 lg:px-0">
				<h2 className="text-2xl lg:text-3xl font-bold text-main w-full">
					Clientes
				</h2>
				{width > 1024 ? (
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
			</section>
			{/* <section className="people w-screen container mx-auto flex items-center justify-center flex-wrap pb-40 px-35 lg:px-0">
				<article className="w-full md:w-10/12 lg:w-9/12 flex flex-wrap items-stretch justify-center">
					<div className="w-full md:w-6/12 flex flex-col items-start justify-start relative order-2 lg:order-1">
						<h3 className="text-black font-bold text-2xl lg:text-xl text-center lg:text-left w-full">
							{data[position].name}
						</h3>
						<p className="text-main font-bold text-xl lg:text-sm text-center lg:text-left w-full">
							{data[position].client}
						</p>
						<p className="text-black mt-5 italic text-lg lg:text-base pr-0 lg:pr-16">
							"{data[position].description}"
						</p>
						<PeopleBtnHolder className="switchClients flex items-center justify-center flex-wrap">
							<BtnShadow
								onClick={() => changeClient(false)}
								className="border-2 border-black py-3 lg:py-1 px-4 lg:px-2 mr-4 bg-white hover:bg-main"
							>
								<img
									src="/arrow-l.svg"
									alt="Arrow Left"
									width="8"
								/>
							</BtnShadow>
							<BtnShadow
								onClick={() => changeClient(true)}
								className="border-2 border-black py-3 lg:py-1 px-4 lg:px-2 bg-white hover:bg-main transition duration-150 ease-in-out"
							>
								<img
									src="/arrow-r.svg"
									alt="Arrow Right"
									width="8"
								/>
							</BtnShadow>
							<div className="w-full flex lg:hidden items-center justify-center mt-5">
								{data.map((item, index) => (
									<div
										className={`border-2 border-black h-4 w-4 ${
											index === data.length - 1
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
						</PeopleBtnHolder>
					</div>
					<div className="w-full md:w-6/12 pl-0 lg:pl-10 pt-32 lg:pt-14 order-1 lg:order-2 flex justify-center items-center lg:block mb-10 lg:mb-0">
						<FaceHolder className="relative">
							<FaceCircles
								src="/animations/client-circle.svg"
								alt="Face Circle"
								width="190"
								height="auto"
							/>
							<FaceImage
								className="object-cover left-0 top-0 absolute border-2 border-black"
								src={data[position].img}
								alt="Nombre persona"
								width="190"
								height="auto"
							/>
							<FaceLines
								className="absolute left-0 bottom-0 border-l-2 border-r-2 border-b-2 border-black object-cover"
								src="/animations/client-lines.svg"
								alt="Lines"
								width="190"
								height="auto"
							/>
						</FaceHolder>
					</div>
				</article>
			</section> */}
		</>
	);
}
