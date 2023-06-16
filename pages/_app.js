// import '../styles/globals.css';
import '../styles/Features.component.css';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import Context from '../components/context';
import { getMemesByCategory } from '../helper';

function MyApp({ Component, pageProps }) {
    const [category, setCategory] = useState('memes');
    const [cursor, setCursor] = useState('c=0');

    const [data, setData] = useState({});
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(false);

    const suffle = async () => {
        setLoading(true);
        const resp = await getMemesByCategory(category, cursor);
        setCursor(resp.data.nextCursor);
        setData([resp?.data.posts[0]]);
        setLoading(false);
    };

    const loadNext = async () => {
        const d = await getMemesByCategory(category, cursor);
        setCursor(d.data?.nextCursor);
        if (!d.data?.posts?.length) {
            setLoading(false);
        }
        setMemes([...memes, ...d.data?.posts]);
        // console.log(memes.length);
    };

    useEffect(() => {
        setMemes([]);
        // if (router.pathname === '/random') suffle();
        loadNext();
    }, [category]);

    const catChange = cat => {
        setCategory(cat);
        setMemes([]);
        setCursor('c=0');
    };

    return (
        <Context.Provider
            value={{
                category,
                catChange,
                suffle,
                loadNext,
                data,
                loading,
                memes,
                setMemes
            }}>
            <ThemeProvider defaultTheme="dark" attribute="class">
                <SimpleReactLightbox>
                    <Component {...pageProps} />
                </SimpleReactLightbox>
            </ThemeProvider>
        </Context.Provider>
    );
}

export default MyApp;
