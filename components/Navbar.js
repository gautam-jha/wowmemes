import Link from 'next/link';
import { useContext, useState } from 'react';
import { useTheme } from 'next-themes';
import Context from './context';

const Navbar = () => {
    const { typeChange, type } = useContext(Context);

    const [active, setActive] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        setActive(!active);
    };

    const availableType = ['Fresh', 'Trending', 'Top'];

    return (
        <>
            <nav className="flex place-items-center justify-between flex-wrap bg-white dark:bg-black p-3 sticky top-0 z-50">
                <Link href="/">
                    <a className="inline-flex items-center p-2 mr-4 ">
                        <img
                            src="/images/logo.png"
                            alt="WowMemes"
                            height="50px"
                            style={{ width: 65, height: 'auto' }}
                        />
                    </a>
                </Link>
                <div className="flex">
                    {availableType.map(btnType => (
                        <button
                            key={btnType}
                            type="button"
                            onClick={() => typeChange(btnType.toLowerCase())}
                            className={`${
                                type === btnType.toLowerCase()
                                    ? ' hover:bg-blue-400  bg-blue-300 dark:bg-yellow-500'
                                    : ''
                            } text-base  hover:scale-110 focus:outline-none flex justify-center px-2 py-1 font-bold cursor-pointer   text-gray-700  border duration-200 ease-in-out  transition`}>
                            <div className="flex leading-5 text-xs sm:text-md">{btnType}</div>
                        </button>
                    ))}
                </div>
                <button
                    type="button"
                    className=" inline-flex p-1 hover:bg-yellow-600 rounded lg:hidden dark:text-white md:ml-auto hover:text-white outline-none"
                    onClick={handleClick}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        active ? '' : 'hidden'
                    } w-full lg:inline-flex lg:flex-grow1 lg:w-auto text-center`}>
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto pt-4">
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full px-1 py-1 rounded dark:text-white font-bold items-center justify-center hover:bg-yellow-400 hover:text-white ">
                                Home
                            </a>
                        </Link>

                        <Link href="/about">
                            <a className="lg:inline-flex lg:w-auto w-full px-1 py-1 rounded dark:text-white font-bold items-center justify-center hover:bg-yellow-400 hover:text-white">
                                About us
                            </a>
                        </Link>

                        <Link href="/random">
                            <a className="lg:inline-flex lg:w-auto w-full px-1 py-1 rounded dark:text-white font-bold items-center justify-center hover:bg-yellow-400 hover:text-white">
                                Random
                            </a>
                        </Link>

                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            className="p-3 h-12 w-12 mx-auto order-2 md:order-3"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                            {' '}
                            {theme === 'dark' ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-800 dark:text-gray-200">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-gray-800 dark:text-gray-200">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
