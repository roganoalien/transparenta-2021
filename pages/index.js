import Head from 'next/head';
import styled from 'styled-components';

const NecesidadSection = styled.section`
	height: calc(100vh - 106px);
`;

const AniTopRight = styled.img`
	transform: translateX(15%);
`;
const AniBottomRight = styled.img`
	transform: translate(-50%, 50%);
`;
const AniTopLeft = styled.img`
	transform: translate(80px, 80px);
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Transparenta</title>
			</Head>
			<main className="w-screen relative">
				<AniTopRight
					src="/animations/animation-right-top.svg"
					alt="Fake animation"
					className="top-0 right-0 absolute"
					width="600"
				/>
				<AniBottomRight
					src="/animations/animation-right-bottom.svg"
					alt="Fake animation"
					className="bottom-0 right-0 absolute"
					width="250"
				/>
				<AniTopLeft
					src="/animations/animation-left-top.svg"
					alt="Fake animation"
					className="top-0 left-0 absolute"
					width="200"
				/>
				<NecesidadSection className="necesidad container mx-auto h-screen w-full flex flex-col items-center justify-center">
					<h1 className="text-xl md:text-3xl lg:text-5xl text-main font-bold w-full md:w-10/12  lg:w-6/12">
						Una necesidad actual
					</h1>
					<p className="text-black text-lg md:text-xl lg:text-3xl mt-4 font-bold w-full md:w-10/12  lg:w-6/12">
						Comunica de manera innovadora e inteligente los datos
						que más le importan a tu comunidad.{' '}
					</p>
				</NecesidadSection>
			</main>
		</>
	);
}
