import { useContext, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// import absoluteUrl from 'next-absolute-url';
// import { Meme } from '../components';
import Layout from '../components/Layout';
import Context from '../components/context';
import Loader from '../components/Loader';
import { fetcher } from '../helper';
import GagMeme from '../components/GagMeme';

export default function Home({ featured }) {
    const { loadNext, memes, loading } = useContext(Context);

    useEffect(loadNext, []);

    return (
        <Layout featured={featured}>
            {memes ? (
                <InfiniteScroll
                    dataLength={memes.length + 10}
                    next={async () => loadNext()}
                    hasMore={1}
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5 justify-start"
                    loader={
                        loading && (
                            <>
                                <Loader />
                                <Loader />
                            </>
                        )
                    }
                    endMessage={<h4>Nothing more to show</h4>}>
                    {memes.map(meme => (
                        <GagMeme data={meme} key={meme.id} />
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

/**
 * get static props to get data before rendering component
 * @date 2021-07-22
 * @returns {object}
 */
export const getStaticProps = async () => {
    // https://9gag.com/v1/group-posts/type/fresh?c=0&nsfw=1
    // const data = await fetcher(`https://9gag.com/v1/tag-posts/tag/sarcasm/type/fresh?c=0&nsfw=1`);

    const data = await fetcher(`https://9gag.com/v1/group-posts/type/fresh?c=0&nsfw=1`);
    // console.log(typeof data, data);
    return {
        props: {
            initialMemes: [],
            featured: data || {}
        },
        revalidate: 5
    };
};
