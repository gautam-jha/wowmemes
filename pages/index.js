import { useContext, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Meme } from '../components';
import Layout from '../components/Layout';
import Context from '../components/context';
import Loader from '../components/Loader';
import { fetcher } from '../helper';

export default function Home({ featured }) {
    const { loadNext, memes } = useContext(Context);

    useEffect(() => {
        // setMemes(initialMemes);
        loadNext();
    }, []);

    return (
        <Layout featured={featured}>
            {memes ? (
                <InfiniteScroll
                    dataLength={memes.length + 5}
                    next={async () => loadNext()}
                    hasMore={1}
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5 justify-start"
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
    // console.log(process.env.NODE_ENV);
    // console.log(process.env.VERCEL_URL);
    const data = await fetcher(`http://${process.env.VERCEL_URL}/api/gags`);
    return {
        props: { initialMemes: [], featured: data },
        revalidate: 600
    };
}
