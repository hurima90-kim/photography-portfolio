'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavbarComponent() {
	const pathname = usePathname();
	const menu = [
		{ label: 'Portfolio', href: '/' },
		{ label: 'About Me', href: '/about' },
		{ label: 'Contact', href: '/contact' },
	];

	return (
		<div className="flex justify-between items-center mb-8">
			<div className="text-2xl font-semibold">Home</div>
			<div className="flex justify-between items-center w-100 text-xl font-medium">
				{menu &&
					menu.map((el, idx) => (
						<Link
							key={idx}
							href={el.href}
							className={`cursor-pointer hover:underline ${pathname === el.href ? 'underline' : ''}`}
						>
							{el.label}
						</Link>
					))}
			</div>
		</div>
	);
}

export default NavbarComponent;
