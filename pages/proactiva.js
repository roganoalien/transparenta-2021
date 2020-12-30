import Head from 'next/head';
import styled from 'styled-components';

const AniTopRight = styled.img`
	transform: translate(22%, 300%);
`;
const AniTopLeft = styled.img`
	transform: translate(-75%, 115%);
`;
const AniMiddle = styled.img`
	transform: translate(-50%, -50%);
`;
const AniBottom = styled.img`
	transform: translate(-50%, 0);
`;

export default function Proactiva() {
	return (
		<main className="container mx-auto flex flex-col items-center justify-center relative">
			<AniTopRight
				src="/animations/proactiva-anim-top-right.svg"
				alt="Fake animation"
				className="top-0 right-0 absolute"
				width="390"
			/>
			<AniTopLeft
				src="/animations/proactiva-anim-top-left.svg"
				alt="Fake animation"
				className="top-0 left-0 absolute"
				width="200"
			/>
			<section className="header w-full lg:w-10/12 mb-20 mt-16">
				<h1 className="text-xl md:text-3xl lg:text-5xl text-main font-bold w-full">
					Transparencia proactiva
				</h1>
				<p className="text-black text-lg md:text-xl lg:text-3xl mt-4 font-bold w-full">
					Tu información, tu decisión
				</p>
			</section>
			<section className="footer w-full lg:w-10/12 mt-10 mb-20 flex items-start justify-end">
				<img
					className="mr-10"
					src="/images/activa-1.svg"
					alt="Activa 1"
					width="300"
				/>
				<img
					className="mr-10"
					src="/images/activa-2.svg"
					alt="Activa 2"
					width="234"
				/>
				<img src="/images/activa-3.svg" alt="Activa 3" width="322" />
			</section>
			<section className="what w-full lg:w-10/12 mt-10 mb-20 flex items-center justify-center">
				<article className="w-full lg:w-5/12">
					<h2 className="text-xl md:text-2xl lg:text-3xl text-main font-bold">
						¿Qué es?
					</h2>
					<p className="text-black mt-8 w-full">
						La Transparencia Proactiva es la decisión de dar a
						conocer cierta información de tu organización sin estar
						obligado a ello, buscando generar confianza entre la
						organización y su comunidad.
					</p>
				</article>
				<article className="w-full lg:w-7/12 relative">
					<AniMiddle
						src="/animations/proactiva-anim-middle.svg"
						alt="Fake animation"
						className="top-1/2 right-0 absolute"
						width="200"
					/>
				</article>
			</section>
			<section className="benefits w-full lg:w-10/12 mt-10 mb-60 flex items-start justify-center">
				<article className="w-full lg:w-3/12 relative">
					<AniBottom
						src="/animations/proactiva-anim-bottom.svg"
						alt="Fake animation"
						className="top-0 right-0 absolute"
						width="200"
					/>
				</article>
				<article className="w-full lg:w-9/12">
					<h2 className="text-xl md:text-2xl lg:text-3xl text-main font-bold">
						Beneficios
					</h2>
					<ul className="text-black mt-8 w-full list-disc pl-5 pr-40">
						<li className="mb-1">
							La Transparencia Proactiva es para todo tipo de
							organización, ya sea pública, privada o sin fines de
							lucro.
						</li>
						<li className="mb-1">
							Control total sobre la información comunicada en el
							sitio y soporte documental para añadir contexto.
						</li>
						<li className="mb-1">
							Incremento en la confianza de la comunidad hacia la
							organización con una estrategia de comunicación
							innovadora.
						</li>
						<li className="mb-1">
							La transparencia en las organizaciones cobra cada
							vez más relevancia, ser pionero en esta tendencia te
							ayudará a destacar en tu sector.
						</li>
						<li>
							Control sobre el público objetivo al que va dirigida
							tu estrategia de transparencia proactiva.
						</li>
					</ul>
				</article>
			</section>
		</main>
	);
}
