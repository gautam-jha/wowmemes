import Head from 'next/head';
import Header from '../components/Header';

// export async function
export default function About() {
    return (
        <div className="bg-blue-50">
            <Head>
                <title>About - Random Memes</title>
                <meta name="description" content="Random Memes by Gauti." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container mx-auto px-4 ">
                <h2 className="mt-5 title text-xl  from-indigo-900">About Project</h2>
                <p className="mt-5">
                    Developed by . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    . <br />
                    <br />
                    <img
                        src="https://images.genius.com/99e932595a1dc8a9dc5cf83da3c613f7.480x360x68.gif"
                        alt="wait a minute!"
                    />
                    <br />
                    Who reads about?
                    <br />
                    Go back to memes
                </p>
                <h3 className="mt-5 title text-xl  from-indigo-900">Contributors</h3>
                <p>Hidden...</p>
            </main>
        </div>
    );
}
