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
    const [type, setType] = useState('trending');

    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadNext = async () => {
        const d = await getMemesByCategory(type, category, cursor);
        setCursor(d.data?.nextCursor);
        if (!d.data?.posts?.length) {
            setLoading(false);
        }
        setMemes([...memes, ...d.data?.posts]);
    };

    useEffect(() => {
        loadNext();
    }, [category, type]);

    const catChange = cat => {
        setCategory(cat);
        setMemes([]);
        setCursor('c=0');
    };

    const typeChange = t => {
        setType(t);
        setMemes([]);
        setCursor('c=0');
    };

    return (
        <Context.Provider
            value={{
                category,
                catChange,
                type,
                typeChange,
                loadNext,
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
