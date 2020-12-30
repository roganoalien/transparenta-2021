import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimTopRight = styled.img`
	transform: translate(0, -25%);
`;

export default function Producto() {
	return (
		<>
			<Head>
				<title>Transparenta | Producto</title>
			</Head>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto flex flex-wrap items-center justify-center mt-20"
			>
				<section className="header w-full lg:w-10/12 mb-20 mt-16 flex items-start justify-center flex-wrap">
					<article className="w-full lg:w-8/12">
						<h1 className="text-xl md:text-3xl lg:text-5xl text-main font-bold w-full">
							Licencia Transparenta
						</h1>
						<p className="text-black text-lg mt-4 w-full font-bold pr-20">
							¿Qué es? <br />
							Construimos un sistema de gestión personalizable que
							utiliza herramientas flexibles enfocadas en
							transparentar procesos e información contextualizada
							y presentada de una forma visualmente amigable para
							facilitar su comprensión. Las herramientas de
							Transparenta se adaptan a las necesidades de cada
							organización, automatizando la comunicación de la
							información, enfocándonos en crear plataformas
							fáciles de operar.
						</p>
					</article>
					<article className="w-full lg:w-4/12 relative">
						<AnimTopRight src="/animations/producto-anim-top-right.svg" />
					</article>
					<article className="w-full flex items-center justify-center mt-20">
						<img
							src="/animations/producto-anim-middle.svg"
							alt="Anim Middle"
							className="-ml-20"
							width="350"
						/>
					</article>
				</section>
				<section className="header w-full lg:w-8/12 mb-20 mt-16 flex items-start justify-center flex-wrap">
					<article className="w-full lg:w-6/12">
						<h2 className="text-xl md:text-2xl lg:text-3xl text-main font-bold">
							Módulos de transparencia
						</h2>
						<ul className="text-black mt-8 w-full list-disc pl-5 pr-20">
							<li className="mb-1">
								Herramientas de administración
							</li>
							<li className="mb-1">
								Uso de recursos y donaciones
							</li>
							<li className="mb-1">
								Visualizaciones de datos en tiempo real
							</li>
							<li className="mb-1">Repertorios de documentos</li>
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
								Administración de proyectos y verificación de
								avance
							</li>
							<li className="mb-1">
								Transparencia Financiera / Conexión bancaria
							</li>
						</ul>
						<p className="text-black my-4 w-full list-disc pl-5 pr-40 font-bold">
							Servicios adicionales
						</p>
						<ul className="text-black mt-1 w-full list-disc pl-5 pr-20">
							<li className="mb-1">
								Administración de convocatorias y solicitudes de
								donativos
							</li>
						</ul>
						<p className="text-black mt-20 w-full list-disc pl-5 italic">
							*Todas nuestras herramientas se basan en los
							principios de las leyes de transparencia y
							protección de datos personales.
						</p>
					</article>
					<article className="w-full lg:w-6/12 flex flex-col items-center justify-center">
						<img
							src="/animations/producto-anim-trans-top.svg"
							alt="Anim"
							width="300"
						/>
						<img
							src="/animations/producto-anim-trans-bottom.svg"
							alt="Anim"
							width="190"
							className="-mr-28 mt-10"
						/>
					</article>
				</section>
				<section className="benefits w-full lg:w-8/12 mb-20 mt-16 flex items-stretch justify-center flex-wrap">
					<article className="w-full lg:w-7/12 order-2">
						<h2 className="text-xl md:text-2xl lg:text-3xl text-main font-bold pl-20">
							Beneficios
						</h2>
						<ul className="text-black mt-8 w-full list-disc pr-5 pl-20">
							<li className="mb-1">
								Flexibilidad en las estrategias de comunicación.
							</li>
							<li className="mb-1">
								Control total de acceso a tu plataforma de
								transparencia.
							</li>
							<li className="mb-1">
								Control del impacto deseado de la información
								publicada.
							</li>
							<li className="mb-1">
								Adaptabilidad a las necesidades reales del
								cliente.
							</li>
							<li className="mb-1">
								Generación de datos relevantes para mejorar la
								toma de decisiones.
							</li>
							<li className="mb-1">
								Mecanismo de prevención de crisis publicitarias.
							</li>
							<li className="mb-1">
								Actualización automática de información.
							</li>
							<li className="mb-1">
								Adopción de la transparencia como un estándar y
								no un simple proceso.
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
					<article className="w-full lg:w-5/12 flex flex-col items-center justify-center order-1">
						<img
							src="/animations/producto-anim-benefits.svg"
							alt="Anim"
							width="250"
						/>
					</article>
				</section>
				<section className="funcionalidad w-full mt-32 mb-20 flex items-start justify-center flex-wrap">
					<header className="w-full flex items-center justify-between">
						<h1 className="w-auto text-2xl md:text-3xl lg:text-4xl text-main font-bold">
							Funcionalidad
						</h1>
						<button className="bg-white border-2 border-black py-1 px-4 font-bold shadow-transparentaSmall hover:shadow-none transform scale-100 hover:scale-95 transition duration-200 ease-in-out">
							Mostrar más
						</button>
					</header>
					<article className="w-full flex items-stretch justify-center pt-20">
						<div className="item w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-start">
							<div className="holder border-2 border-black px-8 py-12 shadow-transparenta">
								<img
									src="/animations/producto-anim-func.svg"
									alt="Funcionalidad1"
									width="300"
								/>
							</div>
							<p className="font-bold px-12 mt-10">
								Transparentar el avance de tus proyectos ante
								accionistas.
							</p>
						</div>
						<div className="item w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-start">
							<div className="holder border-2 border-black px-8 py-12 shadow-transparenta">
								<img
									src="/animations/producto-anim-func.svg"
									alt="Funcionalidad1"
									width="300"
								/>
							</div>
							<p className="font-bold px-12 mt-10">
								Transparentar el avance de los proyectos
								Institucionales para seguridad de tus
								beneficiarios.
							</p>
						</div>
						<div className="item w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center justify-start">
							<div className="holder border-2 border-black px-8 py-12 shadow-transparenta">
								<img
									src="/animations/producto-anim-func.svg"
									alt="Funcionalidad1"
									width="300"
								/>
							</div>
							<p className="font-bold px-12 mt-10">
								Transparentar el uso de recursos públicos
								asignados por proyecto.
							</p>
						</div>
					</article>
				</section>
				<section className="licencias w-full mb-40 mt-32 flex items-start justify-center flex-wrap">
					<header className="w-full flex items-center justify-between">
						<h1 className="w-auto text-2xl md:text-3xl lg:text-4xl text-main font-bold">
							Licencias
						</h1>
					</header>
					<article className="w-full flex items-stretch justify-center pt-20">
						<div className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch">
							<div className="holder border-2 border-black px-8 py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
								<p className="w-full font-bold text-lg text-center mb-8">
									Personal
								</p>
								<img
									src="/licencias/licencias-1.svg"
									alt="Funcionalidad1"
								/>
								<p className="w-full text-lg text-center mt-8">
									$ 9.99 / Month
								</p>
							</div>
						</div>
						<div className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch">
							<div className="holder border-2 border-black px-8 py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
								<p className="w-full font-bold text-lg text-center mb-8">
									Advanced
								</p>
								<img
									src="/licencias/licencias-2.svg"
									alt="Funcionalidad1"
									width="190"
								/>
								<p className="w-full text-lg text-center mt-8">
									$ 19.99 / Month
								</p>
							</div>
						</div>
						<div className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch">
							<div className="holder border-2 border-black px-8 py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
								<p className="w-full font-bold text-lg text-center mb-8">
									Business
								</p>
								<img
									src="/licencias/licencias-3.svg"
									alt="Funcionalidad1"
									width="180"
								/>
								<p className="w-full text-lg text-center mt-8">
									$ 49.99 / Month
								</p>
							</div>
						</div>
						<div className="item w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-start px-4 self-stretch">
							<div className="holder border-2 border-black px-8 py-6 shadow-transparenta flex flex-col items-center justify-center w-full">
								<p className="w-full font-bold text-lg text-center mb-8">
									Premier
								</p>
								<img
									src="/licencias/licencias-4.svg"
									alt="Funcionalidad1"
									width="185"
								/>
								<p className="w-full text-lg text-center mt-8">
									$ 89.99 / Month
								</p>
							</div>
						</div>
					</article>
				</section>
			</motion.main>
		</>
	);
}
