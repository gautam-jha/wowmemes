import { useContext } from 'react';
import Layout from '../components/Layout';
import { Meme } from '../components';
import Context from '../components/context';

// export async function
export default function Random() {
    const { suffle, data, loading } = useContext(Context);
    console.log('data', data);
    return (
        <Layout>
            {data && data?.ups ? (
                <Meme data={data} key={data?.ups} loading={loading} />
            ) : (
                <Meme data={data[0]} key={data[0]?.ups} loading={loading} />
            )}

            <div className="autoprefixer flex mb-10 mt-10 justify-center sticky bottom-0">
                <button
                    type="button"
                    onClick={() => suffle()}
                    className=" text-base leading-5  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-gray-200   bg-gray-100   text-gray-700  border duration-200 ease-in-out  border-gray-600 dark:bg-yellow-400 transition">
                    <img
                        alt="random memes"
                        width="20"
                        height="20"
                        className="mr-3"
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAgNTA7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IkxheWVyXzEiPjxwYXRoIGQ9Ik05LjQ2NSwzNy45NWw4LjI0Mi04LjI0M2wtMS40MTQtMS40MTRsLTguMjQyLDguMjQyQzcuMTA1LDM3LjQ4LDUuODUsMzgsNC41MTUsMzhIMXYyaDMuNTE1ICAgQzYuMzg0LDQwLDguMTQyLDM5LjI3Miw5LjQ2NSwzNy45NXoiLz48cGF0aCBkPSJNMzIuNTM1LDEyLjA1bC04LjI0Miw4LjI0M2wxLjQxNCwxLjQxNGw4LjI0Mi04LjI0MkMzNC44OTUsMTIuNTIsMzYuMTUsMTIsMzcuNDg1LDEyaDYuMTAxbC00LjI5Myw0LjI5M2wxLjQxNCwxLjQxNCAgIEw0Ny40MTQsMTFsLTYuNzA3LTYuNzA3bC0xLjQxNCwxLjQxNEw0My41ODYsMTBoLTYuMTAxQzM1LjYxNiwxMCwzMy44NTgsMTAuNzI4LDMyLjUzNSwxMi4wNXoiLz48cGF0aCBkPSJNOC4wNTEsMTMuNDY0TDMyLjUzNSwzNy45NWMxLjMyMywxLjMyMiwzLjA4MSwyLjA1LDQuOTUsMi4wNWg2LjEwMWwtNC4yOTMsNC4yOTNsMS40MTQsMS40MTRMNDcuNDE0LDM5bC02LjcwNy02LjcwNyAgIGwtMS40MTQsMS40MTRMNDMuNTg2LDM4aC02LjEwMWMtMS4zMzUsMC0yLjU5MS0wLjUyLTMuNTM2LTEuNDY0TDkuNDY1LDEyLjA1QzguMTQyLDEwLjcyOCw2LjM4NCwxMCw0LjUxNSwxMEgxdjJoMy41MTUgICBDNS44NSwxMiw3LjEwNSwxMi41Miw4LjA1MSwxMy40NjR6Ii8+PC9nPjxnLz48L3N2Zz4="
                    />
                    Next Meme!
                </button>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    // const data = await fetcher('https://meme-api.herokuapp.com/gimme');
    return {
        props: { initalMemes: {} },
        revalidate: 15
    };
}
