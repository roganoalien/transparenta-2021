import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimTopRight = styled.img`
	transform: translate(0, -25%);
`;
const AnimTopRight2 = styled.img`
	transform: translate(80px, -25%);
`;

export default function Servicios() {
	return (
		<>
			<Head>
				<title>Transparenta | Servicios</title>
			</Head>
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto flex flex-wrap items-center justify-center mt-90 lg:mt-20 px-35 lg:px-0"
			>
				<section className="header w-full lg:w-10/12 mb-20 mt-16 flex items-start justify-center flex-wrap">
					<article className="w-full lg:w-8/12">
						<h1 className="text-4xl lg:text-5xl text-main font-bold w-full">
							Consultoría
						</h1>
						<p className="text-black w-full pr-0 lg:pr-20 font-medium lg:font-bold mt-4 lg:mt-10">
							¿Qué es? <br />
							La Consultoría es un proceso especializado que tiene
							el objetivo de obtener una base conceptual,
							operativa y funcional del cliente, busca cumplir con
							los siguientes propósitos:
						</p>
						<ul className="text-black mt-8 w-full list-disc pl-5 pr-0 lg:pr-20 font-medium lg:font-bold">
							<li className="mb-1">
								Que el cliente identifique áreas de oportunidad
								dentro de la operación de su propia organización
								en materia de comunicación transparente.
							</li>
							<li className="mb-1">
								Contar con los elementos necesarios para que
								Transparenta realice un análisis de idoneidad de
								integración de sus herramientas, así como la
								implementación de una estrategia integral de
								Transparencia Proactiva.
							</li>
						</ul>
					</article>
					<article className="w-full lg:w-4/12 relative flex lg:block mt-10 lg:mt-0 items-center justify-center">
						<AnimTopRight
							src="/animations/servicios-1-top.svg"
							width="300"
							className="hidden lg:block"
						/>
						<AnimTopRight2
							src="/animations/servicios-1-bottom.svg"
							width="220"
							className="mt-10 hidden lg:block"
						/>
						<img
							src="/animations/consultoria-bar.svg"
							// width="220"
							className="block lg:hidden"
						/>
					</article>
				</section>
				<section className="benefits w-full lg:w-8/12 mb-20 mt-1 flex items-stretch justify-center flex-wrap">
					<article className="w-full lg:w-7/12 order-1 lg:order-2">
						<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20">
							Beneficios
						</h2>
						<p className="text-black pl-0 lg:pl-20 mt-10">
							A través de nuestra consultoría, podemos diseñar la
							estrategia de transparencia proactiva que mejor se
							adecue a las necesidades y objetivos de tu empresa.
						</p>
						<p className="text-black pl-0 lg:pl-20 mt-2 font-medium">
							La consultoría ayuda a identificar cómo sacarle el
							máximo provecho a las herramientas que Transparenta
							tiene disponibles para tu empresa.
						</p>
						<div className="w-full flex items-center justify-center">
							<img
								src="/animations/servicios-benefits-fake.svg"
								alt="Anim"
								className="block lg:hidden mt-10"
								// width="250"
							/>
						</div>
						<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20 mt-10 lg:mt-32">
							Resultados
						</h2>
						<p className="text-black pl-0 lg:pl-20 mt-4 lg:mt-10 font-medium">
							Como producto de la consultoría, se generará un
							entregable consistente en un documento donde se
							podrá apreciar el análisis completo producto de la
							consultoría, así como las áreas de oportunidad
							identificadas por el equipo de Transparenta.
						</p>
						<p className="text-black pl-0 lg:pl-20 mt-2 font-medium">
							Este documento podrá ser utilizado por el cliente
							para implementar los cambios dentro de su
							organización que considere pertinentes.
						</p>
						<p className="text-black pl-0 lg:pl-20 mt-2 font-medium">
							El entregable también tiene el propósito de elaborar
							un documento que sirva como base para la propuesta
							futura de integración de las herramientas de
							Transparenta a la organización del cliente, así como
							la posible elaboración de una estrategia integral de
							Transparencia Proactiva.
						</p>
					</article>
					<article className="w-full lg:w-5/12 flex flex-col items-center justify-center order-2 lg:order-1">
						<img
							src="/animations/servicios-benefits.svg"
							alt="Anim"
							className="-mt-44 hidden lg:block"
							width="250"
						/>
						<img
							src="/animations/servicios-results.svg"
							alt="Anim"
							className="-ml-32 hidden lg:block"
							width="250"
						/>
						<img
							src="/animations/servicios-resultados-fake.svg"
							alt="Anim"
							className="block lg:hidden mt-10"
							// width="250"
						/>
					</article>
				</section>
				<section className="price w-full lg:w-8/12 mb-20 mt-1 flex items-stretch justify-center flex-wrap">
					<article className="w-full order-2">
						<h2 className="text-2xl lg:text-3xl text-main font-bold mb-10">
							Precio
						</h2>
						<div className="w-full lg:w-8/12 border-2 border-black py-8 flex flex-col items-center justify-center shadow-transparenta">
							<p className="font-bold text-black text-lg">
								Consultoría
							</p>
							<img
								src="/consultora.svg"
								alt="Consultora"
								className="my-8"
								width="250"
							/>
							<p className="text-black">$ 49.99 / Month</p>
						</div>
					</article>
				</section>
				<section className="header w-full lg:w-10/12 mb-20 mt-0 lg:mt-16 flex items-start justify-center flex-wrap">
					<article className="w-full lg:w-8/12">
						<h2 className="text-2xl lg:text-5xl text-main font-bold w-full">
							Desarrollos Especiales
						</h2>
						<p className="text-black w-full pr-0 lg:pr-20 mt-4 lg:mt-10 font-medium">
							¿Qué son? <br />
							Los Desarrollos especiales son un proceso
							especializado que tienen como objetivo obtener una
							base conceptual, operativa y funcional del cliente,
							busca cumplir con los siguientes propósitos:
						</p>
						<ul className="text-black mt-8 w-full list-disc pl-5 pr-0 lg:pr-20">
							<li className="mb-1">
								Que el cliente identifique áreas de oportunidad
								dentro de la operación de su propia organización
								en materia de comunicación transparente.
							</li>
							<li className="mb-1">
								Contar con los elementos necesarios para que
								Transparenta realice un análisis de idoneidad de
								integración de sus herramientas, así como la
								implementación de una estrategia integral de
								Transparencia Proactiva.
							</li>
						</ul>
					</article>
					<article className="w-full lg:w-4/12 relative flex lg:block items-center justify-center">
						<AnimTopRight
							src="/animations/servicios-1-top.svg"
							width="300"
							className="hidden lg:block"
						/>
						<AnimTopRight2
							src="/animations/servicios-1-bottom.svg"
							width="220"
							className="mt-10 hidden lg:block"
						/>
						<img
							src="/animations/servicios-desarrollos-fake.svg"
							alt="Fake"
							className="block lg:hidden mt-10"
						/>
					</article>
				</section>
				<section className="benefits w-full lg:w-8/12 mb-20 mt-1 flex items-stretch justify-center flex-wrap">
					<article className="w-full lg:w-7/12 order-2">
						<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20">
							Beneficios
						</h2>
						<p className="text-black pl-0 lg:pl-20 mt-4 lg:mt-10 font-medium">
							A través de nuestra consultoría, podemos diseñar la
							estrategia de transparencia proactiva que mejor se
							adecue a las necesidades y objetivos de tu empresa.
						</p>
						<p className="text-black pl-0 lg:pl-20 mt-2 font-medium">
							La consultoría ayuda a identificar cómo sacarle el
							máximo provecho a las herramientas que Transparenta
							tiene disponibles para tu empresa.
						</p>
						<div className="w-full flex items-center justify-center mt-10 lg:hidden">
							<img
								src="/animations/servicios-beneficios-fake.svg"
								alt="fake"
							/>
						</div>
						<h2 className="text-2xl lg:text-3xl text-main font-bold pl-0 lg:pl-20 mt-16 lg:mt-32">
							Resultados
						</h2>
						<p className="text-black pl-0 lg:pl-20 mt-4 lg:mt-10 font-medium">
							Como producto de la consultoría, se generará un
							entregable consistente en un documento donde se
							podrá apreciar el análisis completo producto de la
							consultoría, así como las áreas de oportunidad
							identificadas por el equipo de Transparenta.
						</p>
						<p className="text-black pl-0 lg:pl-20 mt-2 font-medium">
							Este documento podrá ser utilizado por el cliente
							para implementar los cambios dentro de su
							organización que considere pertinentes.
						</p>
						<p className="text-black pl-0 lg:pl-20 mt-2 font-medium">
							El entregable también tiene el propósito de elaborar
							un documento que sirva como base para la propuesta
							futura de integración de las herramientas de
							Transparenta a la organización del cliente, así como
							la posible elaboración de una estrategia integral de
							Transparencia Proactiva.
						</p>
					</article>
					<article className="w-full lg:w-5/12 hidden lg:flex flex-col items-center justify-center order-1">
						<img
							src="/animations/servicios-benefits.svg"
							alt="Anim"
							className="-mt-44"
							width="250"
						/>
						<img
							src="/animations/servicios-results.svg"
							alt="Anim"
							className="-ml-32"
							width="250"
						/>
					</article>
				</section>
			</motion.main>
		</>
	);
}
