import Image from 'next/image';
import Link from 'next/link';
import ActiveLink from '../components/ActiveLink';

function Nav() {
	return (
		<nav className="w-full flex items-center justify-between py-35 px-16">
			<div className="mainLogo flex items-center justify-center w-1/4">
				<Link href="/">
					<a>
						<Image
							src="/transparenta-logo.svg"
							alt="Transparenta Logo"
							layout="intrinsic"
							width="350px"
							height="28.16px"
						/>
					</a>
				</Link>
			</div>
			<ul className="nav-items flex items-center justify-end w-3/4 text-black text-sm">
				<li className="font-bold uppercase mr-6 hover:text-main">
					<ActiveLink activeClassName="text-main" href="/proactiva">
						<a>Transparencia proactiva</a>
					</ActiveLink>
				</li>
				<li className="font-bold uppercase mr-6 hover:text-main">
					<ActiveLink activeClassName="text-main" href="/producto">
						<a>Producto</a>
					</ActiveLink>
				</li>
				<li className="font-bold uppercase mr-6 hover:text-main">
					<ActiveLink activeClassName="text-main" href="/servicios">
						<a>Servicios</a>
					</ActiveLink>
				</li>
				<li className="font-bold uppercase py-2 px-4 bg-black text-white hover:bg-main hover:text-black cursor-pointer transparenta-btn-toblack shadow-none hover:shadow-transparentaSmall transition duration-200 ease-in-out">
					Obtén Transparenta
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
