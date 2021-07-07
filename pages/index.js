import { useContext, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Meme } from '../components';
import Layout from '../components/Layout';
import Context from '../components/context';
import Loader from '../components/Loader';

export default function Home({ initialMemes }) {
    const { loadNext, memes, setMemes } = useContext(Context);

    useEffect(() => {
        setMemes(initialMemes);
        loadNext();
    }, []);

    return (
        <Layout>
            {memes ? (
                <InfiniteScroll
                    dataLength={memes.length + 5}
                    next={async () => loadNext()}
                    hasMore={1}
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5"
                    loader={
                        <>
                            <Loader />
                            <Loader />
                        </>
                    }
                    endMessage={<h4>Nothing more to show</h4>}>
                    {memes.map(meme => (
                        <Meme data={meme} key={meme.ups} />
                    ))}
                </InfiniteScroll>
            ) : (
                <>
                    {' '}
                    <Loader />
                    <Loader />{' '}
                </>
            )}
        </Layout>
    );
}

export async function getStaticProps() {
    // const data = await fetcher('https://meme-api.herokuapp.com/gimme/2');

    return {
        props: { initialMemes: [] },
        revalidate: 15
    };
}
