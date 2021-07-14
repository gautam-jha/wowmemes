import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/router';

const links = [
    { href: '/about', label: 'About' }
    // { href: 'https://github.com/gautam-jha/random-next-meme', label: 'GitHub' }
];

function Header() {
    const router = useRouter();

    return (
        <nav className="text-center sticky top-0 z-50 bg-white dark:bg-black dark:bg-opacity-90 shadow-lg">
            <ul className="flex justify-between px-4 py-1">
                <li className="flex px-3 py-2 self-center">
                    <Link href="/">
                        <a className="text-black-500 no-underline text-sm">
                            <Image
                                src="/images/memehub.webp"
                                alt="memehub"
                                height="50px"
                                style={{ width: 100, height: 'auto' }}
                            />
                        </a>
                    </Link>
                </li>
                <li className="flex px-3 py-2">
                    <Link href="/random/">
                        <button
                            type="button"
                            className={`${
                                router.pathname === '/random'
                                    ? ' hover:bg-blue-400  bg-blue-300 dark:bg-yellow-500'
                                    : ''
                            } text-base  rounded-r-none  hover:scale-110 focus:outline-none flex justify-center px-2 py-1 rounded font-bold cursor-pointer hover:bg-teal-200  bg-teal-100 border duration-200 ease-in-out text-teal-700 transition`}>
                            <div className="flex leading-5">Random</div>
                        </button>
                    </Link>
                    <Link href="/">
                        <button
                            type="button"
                            className={`${
                                router.pathname === '/'
                                    ? ' hover:bg-blue-400  bg-blue-300 dark:bg-yellow-500'
                                    : ''
                            } text-base  rounded-l-none border-l-0  hover:scale-110 focus:outline-none flex justify-center px-2 py-1 rounded font-bold cursor-pointer   text-gray-700  border duration-200 ease-in-out  transition`}>
                            <div className="flex leading-5">Scrolling</div>
                        </button>
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
