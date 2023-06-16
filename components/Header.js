import Link from 'next/link';

const links = [
    { href: '/about', label: 'About' }
    // { href: 'https://github.com/gautam-jha/random-next-meme', label: 'GitHub' }
];

function Header() {
    return (
        <nav className="text-center sticky top-0 z-50 bg-white dark:bg-black dark:bg-opacity-90 shadow-lg">
            <ul className="flex justify-between px-4 py-1">
                <li className="flex px-3 py-2 self-center">
                    <Link href="/">
                        <a className="text-black-500 no-underline text-sm">
                            <img
                                src="/images/logo.png"
                                alt="WowMemes"
                                height="50px"
                                style={{ width: 100, height: 'auto' }}
                            />
                        </a>
                    </Link>
                </li>

                {links.map(({ href, label }) => (
                    <li key={href} className="flex px-3 py-2">
                        <a className="text-black-500	no-underline text-sm self-center" href={href}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Header;
