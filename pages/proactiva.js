import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LottieHolder } from '../components/LottieHolder';
// import Lottie from 'lottie-react';

// LOTTIES
import one_right from '../animations/proactiva/01_tr.json';
import one_m from '../animations/proactiva/01_m.json';
import one_left from '../animations/proactiva/01_tl.json';
import two from '../animations/proactiva/02_r.json';
import three from '../animations/proactiva/03_l.json';

// const AniTopRight = styled.img`
// 	transform: translate(22%, 300%);
// `;
// const AniTopRightContainer = styled.div`
// 	transform: translate(27%, 81%);
// `;
// const AniTopLeft = styled.img`
// 	transform: translate(-75%, 115%);
// `;
// const AniTopLeftContainer = styled.div`
// 	transform: translate(-60%, 65%);
// `;
// const AniMiddle = styled.img`
// 	transform: translate(-50%, -50%);
// `;
const AniMiddleContainer = styled.div`
	transform: translate(-22.5%, -50%);
`;
// const AniBottom = styled.img`
// 	transform: translate(-50%, 0);
// `;
const AniBottomContainer = styled.div`
	transform: translate(-10%, -12%);
`;

export default function Proactiva() {
	const [width, setWidth] = useState(null);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<Head>
				<title>Transparencia Proactiva</title>
			</Head>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="relative px-35 lg:px-0"
			>
				<div className="container mx-auto flex flex-wrap justify-center">
					{/* <AniTopRight
					src="/animations/proactiva-anim-top-right.svg"
					alt="Fake animation"
					className="top-0 right-0 absolute hidden lg:block"
					width="390"
				/> */}
					{/* <AniTopLeft
					src="/animations/proactiva-anim-top-left.svg"
					alt="Fake animation"
					className="top-0 left-0 absolute hidden lg:block"
					width="200"
				/> */}

					<section className="header w-full lg:w-11/12 xl:w-10/12 mt-90x2 lg:mt-16 z-30">
						<h1 className="text-4xl lg:text-5xl text-main font-bold w-full">
							Transparencia proactiva
						</h1>
						<p className="text-black text-2xl lg:text-3xl mt-4 font-semibold lg:font-bold w-full">
							Tu información, tu decisión
						</p>
					</section>
					<section className="middle-animations w-full flex items-center justify-between">
						<div
							className="hidden lg:block transform -translate-x-1/4"
							style={{ width: 290 }}
						>
							{/* <Lottie animationData={one_left} /> */}
							<LottieHolder animationData={one_left} />
						</div>
						<div className="hidden lg:block transform translate-x-1/4 -translate-y-1/2">
							{/* <Lottie animationData={one_right} style={{ width: 480 }} /> */}
							<LottieHolder animationData={one_right} />
						</div>
					</section>
					<section className="footer w-full lg:w-10/12 mt-0 lg:-mt-44 flex items-start justify-end">
						{/* <Lottie animationData={one_m} style={{ width: 856 }} /> */}
						<div className="w-full lg:w-auto max-w-3xl lg:max-w-3xl xl:max-w-4xl">
							<LottieHolder animationData={one_m} />
						</div>
						{/* <img
						className="mr-10"
						src="/images/activa-1.svg"
						alt="Activa 1"
						width={width < 1024 ? 150 : 300}
					/>
					<img
						className="mr-10"
						src="/images/activa-2.svg"
						alt="Activa 2"
						width={width < 1024 ? 118 : 234}
					/>
					<img
						src="/images/activa-3.svg"
						alt="Activa 3"
						width="322"
						className="hidden lg:block"
					/> */}
					</section>
					<section className="what w-full lg:w-10/12 mt-0 lg:mt-4 mb-0 lg:mb-10 flex items-center justify-center flex-wrap">
						<article className="w-full lg:w-8/12">
							<h2 className="text-2xl lg:text-3xl text-main font-bold">
								¿Qué es?
							</h2>
							<p className="text-black mt-4 lg:mt-8 w-full font-medium">
								La Transparencia Proactiva es la decisión de dar
								a conocer cierta información de tu organización
								sin estar obligado a ello, buscando generar
								confianza entre la organización y su comunidad.
							</p>
						</article>
						<article className="w-full lg:w-4/12 relative flex lg:block items-center justify-center mt-10 lg:mt-0 bg-pink-100">
							{/* <AniMiddle
							src="/animations/proactiva-anim-middle.svg"
							alt="Fake animation"
							className="top-1/2 right-0 absolute hidden lg:block"
							width="200"
						/> */}
							<div
								className="hidden lg:block transform scale-75"
								// style={{ width: 275 }}
							>
								{/* <Lottie animationData={two} /> */}
								<LottieHolder animationData={two} />
							</div>
							{/* <img
							src="/animations/anim-res-proactiva-que.svg"
							alt="Fake Animation"
						/> */}
						</article>
					</section>
					<section className="benefits w-full mt-0 lg:mt-10 mb-32 lg:mb-60 flex items-start justify-center">
						<article className="w-full lg:w-4/12 relative hidden lg:flex items-center justify-center">
							{/* <AniBottom
							src="/animations/proactiva-anim-bottom.svg"
							alt="Fake animation"
							className="top-0 right-0 absolute"
							width="200"
						/> */}
							<div className="" style={{ width: 320 }}>
								{/* <Lottie animationData={three} /> */}
								<LottieHolder animationData={three} />
							</div>
						</article>
						<article className="w-full lg:w-8/12">
							<h2 className="text-2xl lg:text-3xl text-main font-bold">
								Beneficios
							</h2>
							<ul className="text-black mt-8 w-full list-disc pl-5 pr-0 lg:pr-40">
								<li className="mb-1">
									La Transparencia Proactiva es para todo tipo
									de organización, ya sea pública, privada o
									sin fines de lucro.
								</li>
								<li className="mb-1">
									Control total sobre la información
									comunicada en el sitio y soporte documental
									para añadir contexto.
								</li>
								<li className="mb-1">
									Incremento en la confianza de la comunidad
									hacia la organización con una estrategia de
									comunicación innovadora.
								</li>
								<li className="mb-1">
									La transparencia en las organizaciones cobra
									cada vez más relevancia, ser pionero en esta
									tendencia te ayudará a destacar en tu
									sector.
								</li>
								<li>
									Control sobre el público objetivo al que va
									dirigida tu estrategia de transparencia
									proactiva.
								</li>
							</ul>
						</article>
					</section>
				</div>
			</motion.main>
		</>
	);
}
