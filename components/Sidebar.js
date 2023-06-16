import { useContext } from 'react';
import Context from './context';
import styles from '../styles/Meme.module.css';

function Sidebar({ classname }) {
    const { category, catChange, setMemes } = useContext(Context);

    const categories = {
        india: 'India',
        memes: 'Memes',
        tech: 'Tech',
        sarcasm: 'Sarcasm',
        Programmer: 'Programmer',
        developer: 'Developers',
        dark: 'Dark',
        nsfw: 'NSFW',
        wholesome: 'Wholesome',
        dank: 'Dank',
        humour: 'Humour',
        funny: 'Funny',
        savage: 'Savage',
        relationship: 'Relationshit',
        anime: 'Anime',
        gaming: 'Gaming',
        comic: 'Comic',
        wtf: 'WTF'
    };

    return (
        <div
            className={`${classname} fixed bottom-0 top-auto md:sticky md:max-h-screen sidebar-custom md:top-24 inline col-span-1 bg-blue-50 md:bg-transparent dark:bg-black md:dark:bg-transparent left-0 z-10 p-0 md:p-2 no-scrollbar overflow-auto w-screen sm:w-48 ${styles.sidebar_in_mobile}`}>
            <h4 className="text-lg my-4 hidden md:block ">Tags</h4>
            {Object.entries({ ...categories }).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => {
                            setMemes([]);
                            catChange(key);
                        }}
                        type="button"
                        className={`${
                            category.substr(category.indexOf('/') + 1) === key
                                ? 'text-black dark:text-white bg-black bg-opacity-10  dark:bg-white dark:bg-opacity-20 '
                                : ' dark:text-white'
                        } md:w-full mt-2  hover:bg-yellow-500 dark:hover:border-yellow-500 font-normal  hover:text-white dark:text-black py-1 px-2 rounded h-9 whitespace-nowrap text-left`}>
                        #{value}
                    </button>
                );
            })}
        </div>
    );
}

export default Sidebar;
