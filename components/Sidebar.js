import { useContext } from 'react';
import { useTheme } from 'next-themes';
import Context from './context';
import styles from '../styles/Meme.module.css';

function Sidebar() {
    const { category, setCategory } = useContext(Context);
    const { theme, setTheme } = useTheme();

    const categories = {
        memes: 'Memes',
        wholesomememes: 'Wholesome memes',
        dankmemes: 'Dank memes',
        historymemes: 'History memes',
        humour: 'Humour',
        comedyheaven: 'Funny',
        animememes: 'Anime',
        // hentai: 'Hentai', // research purposes only
        comic: 'Comic'
    };

    const country = {
        india: 'India'
    };

    return (
        <div
            className={`sticky h-screen top-10 inline col-span-1 bg-white  dark:bg-white dark:bg-opacity-5 mb-5 p-2 sm:left-0 ${styles.sidebar_in_mobile}`}>
            <h4 className="text-lg mt-4 hidden md:block ">Categories</h4>
            {Object.entries({ ...country }).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => setCategory(`country/${key}`)}
                        type="button"
                        className={`${
                            category.includes(key) ? 'bg-blue-700 text-white ' : 'bg-red-50'
                        } dark:bg-yellow-500 hover:bg-blue-700 dark:border-yellow-500 hover:text-white dark:text-black  font-bold py-1 px-2 rounded m-1 whitespace-nowrap `}>
                        #{value}
                    </button>
                );
            })}
            {Object.entries({ ...categories }).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => {
                            setCategory(`category/${key}`);
                        }}
                        type="button"
                        className={`${
                            category.substr(category.indexOf('/') + 1) === key
                                ? 'bg-blue-700 text-white'
                                : 'bg-red-50'
                        } dark:bg-yellow-500  hover:bg-blue-700 dark:hover:border-yellow-500  hover:text-white dark:text-black font-bold py-1 px-2 rounded m-1 h-9 whitespace-nowrap  `}>
                        #{value}
                    </button>
                );
            })}

            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="p-3 h-12 w-12 order-2 md:order-3"
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
    );
}

export default Sidebar;
