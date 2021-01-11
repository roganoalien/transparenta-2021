import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import ActiveLink from '../components/ActiveLink';

const noScroll = require('no-scroll');

const iconVariants = {
	one: {
		rotate: -90,
		opacity: 0
	},
	two: {
		rotate: 0,
		opacity: 1
		// transition: {
		// 	ease: 'linear'
		// }
	},
	zero: {
		rotate: 90,
		opacity: 0
		// transition: {
		// 	ease: 'linear'
		// }
	}
};

const menuVariants = {
	init: {
		opacity: 0,
		y: '-100%'
	},
	anim: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeInOut'
		}
	},
	end: {
		opacity: 0,
		y: '-120%',
		transition: {
			ease: 'easeInOut'
		}
	}
};

function ResNav() {
	const [open, setOpen] = useState(false);

	const handleMenu = (isInside) => {
		setTimeout(
			function () {
				noScroll.toggle();
				setOpen(!open);
			},
			isInside ? 0 : 0
		);
	};

	return (
		<>
			<nav className="w-full flex items-center justify-between px-35 py-half z-50 fixed left-0 top-0 bg-white">
				<div className="mainLogo flex items-center justify-center w-auto">
					<Image
						src="/transparenta-logo.svg"
						alt="Transparenta Logo"
						layout="intrinsic"
						width="200"
						height="17px"
					/>
				</div>
				<button
					className="bg-gray-100 outline-none"
					onClick={() => handleMenu(false)}
					style={{
						outline: 'none !important'
					}}
				>
					<AnimatePresence exitBeforeEnter>
						{open ? (
							<motion.div
								key="isOpen-menu"
								variants={iconVariants}
								initial="one"
								animate="two"
								exit="zero"
								className="theHolder"
							>
								<Image
									className="outline-none bg-transparent"
									src="/close.svg"
									alt="Menú"
									layout="intrinsic"
									width="25"
									height="20"
								/>
							</motion.div>
						) : (
							<motion.div
								key="isClosed-menu"
								variants={iconVariants}
								initial="one"
								animate="two"
								exit="zero"
								className="theHolder"
							>
								<Image
									className="outline-none bg-transparent"
									src="/burger.svg"
									alt="Menú"
									layout="intrinsic"
									width="25"
									height="20"
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</button>
			</nav>
			<AnimatePresence exitBeforeEnter>
				{open && (
					<motion.div
						key="menu-opened"
						initial="init"
						animate="anim"
						exit="end"
						variants={menuVariants}
						className="mobile-menu z-40 h-screen w-screen fixed left-0 top-0 bg-white pointer-events-none flex items-center justify-center flex-col border-bottom-2 border-main"
					>
						<ul className="pointer-events-auto">
							<li
								className="font-bold uppercase hover:text-main text-center mb-4"
								onClick={() => handleMenu(true)}
							>
								<ActiveLink
									activeClassName="text-main"
									href="/"
								>
									<a>Inicio</a>
								</ActiveLink>
							</li>
							<li
								className="font-bold uppercase hover:text-main text-center mb-4"
								onClick={() => handleMenu(true)}
							>
								<ActiveLink
									activeClassName="text-main"
									href="/proactiva"
								>
									<a>Transparencia proactiva</a>
								</ActiveLink>
							</li>
							<li
								className="font-bold uppercase hover:text-main text-center mb-4"
								onClick={() => handleMenu(true)}
							>
								<ActiveLink
									activeClassName="text-main"
									href="/producto"
								>
									<a>Producto</a>
								</ActiveLink>
							</li>
							<li
								className="font-bold uppercase hover:text-main text-center mb-4"
								onClick={() => handleMenu(true)}
							>
								<ActiveLink
									activeClassName="text-main"
									href="/servicios"
								>
									<a>Servicios</a>
								</ActiveLink>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default ResNav;
