import Image from 'next/image';
import Link from 'next/link';

function Nav() {
	return (
		<nav className="w-full flex items-center justify-between py-35 px-16">
			<div className="mainLogo flex items-center justify-center w-1/4">
				<Image
					src="/transparenta-logo.svg"
					alt="Transparenta Logo"
					layout="intrinsic"
					width="350px"
					height="28.16px"
				/>
			</div>
			<ul className="nav-items flex items-center justify-end w-3/4 text-black text-sm">
				<li className="font-bold uppercase mr-6 hover:text-main">
					<Link href="/proactiva">
						<a>Transparencia proactiva</a>
					</Link>
				</li>
				<li className="font-bold uppercase mr-6 hover:text-main">
					<Link href="/producto">
						<a>Producto</a>
					</Link>
				</li>
				<li className="font-bold uppercase mr-6 hover:text-main">
					<Link href="/servicios">
						<a>Servicios</a>
					</Link>
				</li>
				<li className="font-bold uppercase py-2 px-4 bg-black text-white hover:bg-main hover:text-black cursor-pointer relative transparenta-btn-toblack">
					Obtén Transparenta
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
