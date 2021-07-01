// import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Context from '../components/context';
import { getMemesByCategory } from '../helper';

function MyApp({ Component, pageProps }) {
    const [category, setCategory] = useState('category/funny');
    const [data, setData] = useState({});
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(false);

    const suffle = async () => {
        setLoading(true);
        const resp = await getMemesByCategory(category, 1);
        setData(resp?.memes[0]);
        setLoading(false);
    };

    const loadNext = async () => {
        const d = await getMemesByCategory(category, 4);
        // console.log(d.memes)
        setMemes([
            ...new Map([...memes, ...(d?.memes ?? d)].map(item => [item.ups, item])).values()
        ]);
    };

    useEffect(() => {
        suffle();
        setMemes([]);
        loadNext();
    }, [category]);

    return (
        <Context.Provider
            value={{ category, setCategory, suffle, loadNext, data, loading, memes, setMemes }}>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </Context.Provider>
    );
}

export default MyApp;
