import { useContext } from 'react';
import Context from './context';
import styles from '../styles/Meme.module.css';

function Sidebar({ classname }) {
    const { category, setCategory, setMemes } = useContext(Context);

    const categories = {
        india: 'India',
        memes: 'Memes',
        wholesomememes: 'Wholesome',
        dankmemes: 'Dank memes',
        wtf: 'WTF',
        humour: 'Humour',
        comedyheaven: 'Funny',
        animememes: 'Anime',
        // hentai: 'Hentai', // research purposes only
        nsfw: 'NSFW',
        comic: 'Comic'
    };

    // const country = {};

    return (
        <div
            className={`${classname} sticky top-14 md:top-24 h-screen inline col-span-1 bg-transparent dark:bg-black sm:left-0 z-10 p-0 md:p-2 ${styles.sidebar_in_mobile}`}>
            <h4 className="text-lg my-4 hidden md:block ">Tags</h4>
            {Object.entries({ ...categories }).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => {
                            setMemes([]);
                            setCategory(`category/${key}`);
                        }}
                        type="button"
                        className={`${
                            category.substr(category.indexOf('/') + 1) === key
                                ? 'text-black dark:text-white  dark:bg-white dark:bg-opacity-20 '
                                : ' dark:text-white'
                        } w-full mt-2  hover:bg-yellow-500 dark:hover:border-yellow-500 font-normal  hover:text-white dark:text-black py-1 px-2 rounded h-9 whitespace-nowrap text-left`}>
                        #{value}
                    </button>
                );
            })}
        </div>
    );
}

export default Sidebar;
