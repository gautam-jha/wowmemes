import { useContext } from 'react';
import Context from './context';
import styles from '../styles/Meme.module.css';

function Sidebar() {
    const { category, setCategory, setMemes } = useContext(Context);

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
            className={`sticky h-screen top-10 inline col-span-1 bg-white  dark:bg-black dark:bg-opacity-90 mb-5 pt-4 sm:left-0 ${styles.sidebar_in_mobile}`}>
            <h4 className="text-lg mt-4 hidden md:block ">Categories</h4>
            {Object.entries({ ...country }).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => {
                            setMemes([]);
                            setCategory(`country/${key}`);
                        }}
                        type="button"
                        className={`${
                            category.includes(key) ? 'bg-blue-700 text-white ' : 'bg-red-50'
                        } dark:bg-yellow-500 hover:bg-blue-700 dark:border-yellow-500 hover:text-white dark:text-black  font-bold py-1 px-2 rounded m-1 whitespace-nowrap mt-2`}>
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
                        } dark:bg-yellow-500  hover:bg-blue-700 dark:hover:border-yellow-500  hover:text-white dark:text-black font-bold py-1 px-2 rounded m-1 h-9 whitespace-nowrap  mt-2`}>
                        #{value}
                    </button>
                );
            })}
        </div>
    );
}

export default Sidebar;
