import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LottieHolder } from '../components/LottieHolder';

// LOTTIES
import one_right from '../animations/producto/01_r.json';
import two_m from '../animations/producto/02_m.json';
import three from '../animations/producto/03_r.json';
import four from '../animations/producto/04_l.json';
import l_advanced from '../animations/producto/licencia_advanced.json';
import l_business from '../animations/producto/licencia_business.json';
import l_personal from '../animations/producto/licencia_personal.json';
import l_premier from '../animations/producto/licencia_premier.json';

SwiperCore.use([Autoplay, Pagination]);

const AnimTopRight = styled.img`
	transform: translate(0, -25%);
`;

export default function Producto() {
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
				<title>Transparenta | Producto</title>
			</Head>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="flex flex-wrap items-center justify-center px-35 lg:px-0 mt-90x2 lg:mt-20"
			>
				<div className="container mx-auto flex flex-wrap items-center justify-center px-0 md:px-35 lg:px-18">
					<section className="header w-full lg:mt-16 flex items-start justify-center flex-wrap">
						<article className="w-full lg:w-8/12">
							<h1 className="text-4xl lg:text-5xl text-main font-bold w-full">
								Licencia Transparenta
							</h1>
							<p className="text-black text-lg mt-4 w-full font-medium lg:font-bold pr-0 lg:pr-20">
								¿Qué es? <br />
								Construimos un sistema de gestión personalizable
								que utiliza herramientas flexibles enfocadas en
								transparentar procesos e información
								contextualizada y presentada de una forma
								visualmente amigable para facilitar su
								comprensión. Las herramientas de Transparenta se
								adaptan a las necesidades de cada organización,
								automatizando la comunicación de la información,
								enfocándonos en crear plataformas fáciles de
								operar.
							</p>
						</article>
						<article className="w-full lg:w-4/12 relative hidden lg:flex items-center justify-content">
							{/* <AnimTopRight src="/animations/producto-anim-top-right.svg" /> */}
							<div className="mt-0 lg:-mt-28">
								<LottieHolder animationData={one_right} />
							</div>
						</article>
						<article className="w-full flex items-center justify-center mb-5">
							{/* <img
								src="/animations/producto-anim-middle.svg"
								alt="Anim Middle"
								className="ml-0 lg:-ml-20"
								width="350"
							/> */}
							<div className="max-w-md">
								<LottieHolder animationData={two_m} />
							</div>
						</article>
					</section>
					<section className="header w-full mb-6 lg:mb-10 mt-0 flex items-start justify-center flex-wrap">
						<article className="w-full lg:w-6/12">
							<h2 className="text-2xl lg:text-3xl font-bold text-main">
								Módulos de transparencia
							</h2>
							<ul className="text-black mt-8 w-full list-disc pl-5 pr-0 lg:pr-20">
								<li className="mb-1">
									Herramientas de administración
								</li>
								<li className="mb-1">
									Uso de recursos y donaciones
								</li>
								<li className="mb-1">
									Visualizaciones de datos en tiempo real
								</li>
								<li className="mb-1">
									Repertorios de documentos
								</li>
								<li className="mb-1">
									Almacenamientos dinámicos de datos
								</li>
								<li className="mb-1">
									Calculadora de impacto social
								</li>
								<li className="mb-1">
									Administración de multimedia
								</li>
								<li className="mb-1">
									Administración de proyectos y verificación
									de avance
								</li>
								<li className="mb-1">
									Transparencia Financiera / Conexión bancaria
								</li>
							</ul>
							<p className="text-black my-4 w-full list-disc pl-5 pr-0 lg:pr-40 font-bold">
								Servicios adicionales
							</p>
							<ul className="text-black mt-4 w-full list-disc pl-5 pr-0 lg:pr-20">
								<li className="mb-1">
									Administración de convocatorias y
									solicitudes de donativos
								</li>
							</ul>
							<p className="text-black mt-10 w-full list-disc pl-0 lg:pl-5 italic">
								*Todas nuestras herramientas se basan en los
								principios de las leyes de transparencia y
								protección de datos personales.
							</p>
						</article>
						<article className="w-full lg:w-6/12 hidden lg:flex flex-col items-center justify-center">
							{/* <img
								src="/animations/producto-anim-trans-top.svg"
								alt="Anim"
								width="300"
							/>
							<img
								src="/animations/producto-anim-trans-bottom.svg"
								alt="Anim"
								width="190"
								className="-mr-28 mt-10 hidden lg:block"
							/> */}
							<div className="max-w-sm">
								<LottieHolder animationData={three} />
							</div>
						</article>
					</section>
					<section className="benefits w-full mb-4 mt-0 lg:mt-4 flex items-stretch justify-center flex-wrap">
						<article className="w-full lg:w-7/12 order-1 lg:order-2">
							<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20">
								Beneficios
							</h2>
							<ul className="text-black mt-8 w-full list-disc pr-0 lg:pr-5 pl-5 lg:pl-20">
								<li className="mb-1">
									Flexibilidad en las estrategias de
									comunicación.
								</li>
								<li className="mb-1">
									Control total de acceso a tu plataforma de
									transparencia.
								</li>
								<li className="mb-1">
									Control del impacto deseado de la
									información publicada.
								</li>
								<li className="mb-1">
									Adaptabilidad a las necesidades reales del
									cliente.
								</li>
								<li className="mb-1">
									Generación de datos relevantes para mejorar
									la toma de decisiones.
								</li>
								<li className="mb-1">
									Mecanismo de prevención de crisis
									publicitarias.
								</li>
								<li className="mb-1">
									Actualización automática de información.
								</li>
								<li className="mb-1">
									Adopción de la transparencia como un
									estándar y no un simple proceso.
								</li>
								<li className="mb-1">
									Trazabilidad en avances de proyectos y
									cumplimiento de metas y objetivos.
								</li>
								<li className="mb-1">
									Incremento de la confianza y mejora de la
									percepción general del cliente dentro de su
									público objetivo.
								</li>
							</ul>
						</article>
						<article className="w-full lg:w-5/12 flex flex-col items-center justify-center order-2 lg:order-1 lg:mt-0">
							<div className="w-6/12 lg:w-full max-w-xs">
								<LottieHolder animationData={four} />
							</div>
							{/* <img
								src="/animations/producto-anim-benefits.svg"
								alt="Anim"
								width="250"
								className="hidden lg:block"
							/>
							<img
								src="/animations/producto-res-benefit.svg"
								alt="Anim"
								className="block lg:hidden"
							/> */}
						</article>
					</section>
					<section className="funcionalidad w-full mb-5 lg:mb-0 mt-5 lg:mt-16 flex items-start justify-center flex-wrap">
						<header className="w-full flex items-center justify-between flex-wrap">
							<h2 className="w-auto text-3xl lg:text-4xl text-main font-bold">
								Funcionalidad
							</h2>
							<button className="bg-white border-2 border-black py-1 px-2 lg:px-4 mt-5 lg:mt-0 font-bold shadow-transparentaSmall hover:shadow-none transform scale-100 hover:scale-95 transition duration-200 ease-in-out">
								Mostrar más
							</button>
						</header>
						<article className="w-full flex items-stretch justify-center pt-10 lg:pt-20">
							{width > 1023 ? (
								<>
									<div className="item w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-start lg:px-5 xl:px-0">
										<div className="holder border-2 border-black px-8 py-12 shadow-transparenta">
											<img
												src="/animations/producto-anim-func.svg"
												alt="Funcionalidad1"
												width="300"
											/>
										</div>
										<p className="font-bold px-2 mt-10">
											Transparentar el avance de tus
											proyectos ante accionistas.
										</p>
									</div>
									<div className="item w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-start lg:px-5 xl:px-0">
										<div className="holder border-2 border-black px-8 py-12 shadow-transparenta">
											<img
												src="/animations/producto-anim-func.svg"
												alt="Funcionalidad1"
												width="300"
											/>
										</div>
										<p className="font-bold px-2 mt-10">
											Transparentar el avance de los
											proyectos Institucionales para
											seguridad de tus beneficiarios.
										</p>
									</div>
									<div className="item w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-start lg:px-5 xl:px-0">
										<div className="holder border-2 border-black px-8 py-12 shadow-transparenta">
											<img
												src="/animations/producto-anim-func.svg"
												alt="Funcionalidad1"
												width="300"
											/>
										</div>
										<p className="font-bold px-2 mt-10">
											Transparentar el uso de recursos
											públicos asignados por proyecto.
										</p>
									</div>
								</>
							) : (
								<Swiper
									className="w-full the-product-holder overflow-hidden"
									spaceBetween={0}
									slidesPerView={
										width > 600 && width < 10241 ? 2 : 1
									}
									centeredSlides={
										width > 600 && width < 10241
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
									<SwiperSlide className="flex flex-col items-center justify-start w-full sm:max-w-sm lg:w-auto px-20 sm:px-5 lg:px-0">
										<div className="holder border-2 border-black px-8 py-12 shadow-transparenta mx-10">
											<img
												src="/animations/producto-anim-func.svg"
												alt="Funcionalidad1"
												width="300"
											/>
										</div>
										<p className="font-bold mt-10 text-center">
											Transparentar el avance de tus
											proyectos ante accionistas.
										</p>
									</SwiperSlide>
									<SwiperSlide className="flex flex-col items-center justify-start w-full sm:max-w-sm lg:w-auto px-20 sm:px-5 lg:px-0">
										<div className="holder border-2 border-black px-8 py-12 shadow-transparenta mx-10">
											<img
												src="/animations/producto-anim-func.svg"
												alt="Funcionalidad1"
												width="300"
											/>
										</div>
										<p className="font-bold mt-10 text-center">
											Transparentar el avance de los
											proyectos Institucionales para
											seguridad de tus beneficiarios.
										</p>
									</SwiperSlide>
									<SwiperSlide className="flex flex-col items-center justify-start w-full sm:max-w-sm lg:w-auto px-20 sm:px-5 lg:px-0">
										<div className="holder border-2 border-black px-8 py-12 shadow-transparenta mx-10">
											<img
												src="/animations/producto-anim-func.svg"
												alt="Funcionalidad1"
												width="300"
											/>
										</div>
										<p className="font-bold mt-10 text-center">
											Transparentar el uso de recursos
											públicos asignados por proyecto.
										</p>
									</SwiperSlide>
								</Swiper>
							)}
						</article>
					</section>
					<section className="licencias w-full mb-10 lg:mb-40 mt-0 lg:mt-16 flex items-start justify-center flex-wrap">
						<header className="w-full flex items-center justify-between">
							<h2 className="w-auto text-3xl lg:text-4xl text-main font-bold">
								Licencias
							</h2>
						</header>
						<article className="w-full flex items-stretch justify-center pt-4 lg:pt-16">
							{width > 1023 ? (
								<div className="w-full flex items-stretch justify-center">
									<div className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch">
										<div className="holder border-2 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
											<p className="w-full font-bold text-lg text-center mb-8">
												Personal
											</p>
											<div className="px-8">
												<LottieHolder
													animationData={l_personal}
												/>
											</div>
											{/* <img
												src="/licencias/licencias-1.svg"
												alt="Funcionalidad1"
											/> */}
											<p className="w-full text-lg text-center mt-8">
												$ 9.99 / Month
											</p>
										</div>
									</div>
									<div className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch">
										<div className="holder border-2 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
											<p className="w-full font-bold text-lg text-center mb-8">
												Advanced
											</p>
											<div className="px-8">
												<LottieHolder
													animationData={l_advanced}
												/>
											</div>
											{/* <img
												src="/licencias/licencias-2.svg"
												alt="Funcionalidad1"
												width="190"
											/> */}
											<p className="w-full text-lg text-center mt-8">
												$ 19.99 / Month
											</p>
										</div>
									</div>
									<div className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch">
										<div className="holder border-2 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
											<p className="w-full font-bold text-lg text-center mb-8">
												Business
											</p>
											<div className="px-8">
												<LottieHolder
													animationData={l_business}
												/>
											</div>
											{/* <img
												src="/licencias/licencias-3.svg"
												alt="Funcionalidad1"
												width="180"
											/> */}
											<p className="w-full text-lg text-center mt-8">
												$ 49.99 / Month
											</p>
										</div>
									</div>
									<div className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch">
										<div className="holder border-2 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
											<p className="w-full font-bold text-lg text-center mb-8">
												Premier
											</p>
											<div className="px-8">
												<LottieHolder
													animationData={l_premier}
												/>
											</div>
											{/* <img
												src="/licencias/licencias-4.svg"
												alt="Funcionalidad1"
												width="185"
											/> */}
											<p className="w-full text-lg text-center mt-8">
												$ 89.99 / Month
											</p>
										</div>
									</div>
								</div>
							) : (
								<>
									<Swiper
										className="w-full the-license"
										spaceBetween={0}
										slidesPerView={
											width > 600 && width < 10241 ? 2 : 1
										}
										centeredSlides={
											width > 600 && width < 10241
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
										<SwiperSlide className="item w-full flex flex-col items-center justify-start px-4 self-stretch">
											<div className="holder border-2 border-black py-6 shadow-transparenta flex flex-col items-center justify-center w-full mx-12">
												<p className="w-full font-bold text-lg text-center mb-8">
													Personal
												</p>
												<div
													className="w-full"
													style={{ maxWidth: 181 }}
												>
													<LottieHolder
														animationData={
															l_personal
														}
													/>
												</div>
												{/* <img
													src="/licencias/licencias-1.svg"
													alt="Funcionalidad1"
												/> */}
												<p className="w-full text-lg text-center mt-8">
													$ 9.99 / Month
												</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="item w-full flex flex-col items-center justify-start px-4 self-stretch">
											<div className="holder border-2 border-black px-8 py-6 shadow-transparenta flex flex-col items-center justify-center w-full mx-12">
												<p className="w-full font-bold text-lg text-center mb-8">
													Advanced
												</p>
												<div
													className="w-full"
													style={{ maxWidth: 181 }}
												>
													<LottieHolder
														animationData={
															l_advanced
														}
													/>
												</div>
												{/* <img
													src="/licencias/licencias-2.svg"
													alt="Funcionalidad1"
													width="190"
												/> */}
												<p className="w-full text-lg text-center mt-8">
													$ 19.99 / Month
												</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="item w-full flex flex-col items-center justify-start px-4 self-stretch">
											<div className="holder border-2 border-black px-8 py-6 shadow-transparenta flex flex-col items-center justify-center w-full mx-12">
												<p className="w-full font-bold text-lg text-center mb-8">
													Business
												</p>
												<div
													className="w-full"
													style={{ maxWidth: 181 }}
												>
													<LottieHolder
														animationData={
															l_business
														}
													/>
												</div>
												{/* <img
													src="/licencias/licencias-3.svg"
													alt="Funcionalidad1"
													width="180"
												/> */}
												<p className="w-full text-lg text-center mt-8">
													$ 49.99 / Month
												</p>
											</div>
										</SwiperSlide>
										<SwiperSlide className="item w-full flex flex-col items-center justify-start px-4 self-stretch">
											<div className="holder border-2 border-black px-8 py-6 shadow-transparenta flex flex-col items-center justify-center w-full mx-12">
												<p className="w-full font-bold text-lg text-center mb-8">
													Premier
												</p>
												<div
													className="w-full"
													style={{ maxWidth: 181 }}
												>
													<LottieHolder
														animationData={
															l_premier
														}
													/>
												</div>
												{/* <img
													src="/licencias/licencias-4.svg"
													alt="Funcionalidad1"
													width="185"
												/> */}
												<p className="w-full text-lg text-center mt-8">
													$ 89.99 / Month
												</p>
											</div>
										</SwiperSlide>
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
