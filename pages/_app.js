// import '../styles/globals.css';
import '../styles/Features.component.css';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import Context from '../components/context';
import { getMemesByCategory } from '../helper';

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [category, setCategory] = useState('category/memes');
    const [data, setData] = useState({});
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(false);

    const prevMemes = usePrevious(memes.length);

    const suffle = async () => {
        setLoading(true);
        const resp = await getMemesByCategory(category, 1);
        setData(resp?.memes[0]);
        setLoading(false);
    };

    const loadNext = async () => {
        const sol = memes.length / 2;
        const count = sol > 8 ? parseInt(Number(sol), 10) : 5;
        const d = await getMemesByCategory(category, count);
        setMemes([
            ...new Map([...memes, ...(d?.memes ?? d)].map(item => [item.ups, item])).values()
        ]);
        // console.log(memes.length);
    };

    useEffect(() => {
        setMemes([]);
        if (router.pathname === '/random') suffle();
        if (router.pathname === '/') loadNext();

        return () => {
            setMemes([]);
        };
    }, [category]);

    useEffect(() => {
        if (prevMemes > 10 && prevMemes === memes.length) {
            // process here
            setTimeout(() => {
                loadNext();
            }, 3000);
        }
    }, [memes]);

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
