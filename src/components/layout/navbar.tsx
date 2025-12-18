'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Close, Menu } from '@carbon/icons-react';
import { useState } from 'react';

function NavbarComponent() {
	const pathname = usePathname();
	const menu = [
		{ label: 'Portfolio', href: '/' },
		{ label: 'About Me', href: '/about' },
		{ label: 'Contact', href: '/contact' },
	];

	const [toggle, setToggle] = useState<boolean>(false);

	const handleClickToggle = () => {
		setToggle((prev) => !prev);
	};

	return (
		<div className="mb-8">
			<div className="flex justify-between items-center">
				<Link href="/">
					<div className="text-2xl font-semibold">Kim Euntae</div>
				</Link>
				<nav className="hidden md:flex items-center gap-6 text-xl font-medium">
					{menu.map((el) => (
						<Link
							key={el.href}
							href={el.href}
							className={`hover:underline underline-offset-8 transition-all ${pathname === el.href ? 'underline' : ''}`}
						>
							{el.label}
						</Link>
					))}
				</nav>
				<button
					className="md:hidden cursor-pointer"
					aria-label={toggle ? 'Close menu' : 'Open menu'}
					onClick={handleClickToggle}
				>
					{toggle !== true ? <Menu size={24} /> : <Close size={24} />}
				</button>
			</div>

			<nav
				className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					toggle ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="flex flex-col gap-2 py-2 border-t border-b border-gray-400">
					{menu.map((el) => (
						<Link
							key={el.href}
							href={el.href}
							className={`px-4 py-2 text-lg transition-colors rounded ${
								pathname === el.href ? 'font-semibold' : ''
							}`}
							onClick={() => setToggle(false)}
						>
							{el.label}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
}

export default NavbarComponent;
