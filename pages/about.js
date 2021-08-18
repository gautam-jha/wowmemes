import Head from 'next/head';
import Navbar from '../components/Navbar';
import { fetcher } from '../helper';

// export async function
export default function About({ contributors, repo }) {
    return (
        <div className="bg-blue-50 dark:bg-black dark:bg-opacity-90">
            <Head>
                <title>About - MemeHub</title>
                <meta name="description" content="MemeHub - Find Your Favorite Free Memes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="container mx-auto px-4 ">
                <h2 className="mt-5 title text-xl  from-indigo-900">About {repo.name}</h2>
                <p className="mt-5">
                    {repo.description}
                    <br />
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
                <h3 className="mt-5 title text-xl text-center  from-indigo-900">Contributors</h3>
                <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200">
                    <dt className="sr-only">Authors</dt>
                    <dd>
                        <ul className="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                            {contributors &&
                                contributors.map(c => {
                                    return (
                                        <li key={c.id} className="flex items-center space-x-2">
                                            <img
                                                src={c.avatar_url}
                                                alt=""
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <dl className="text-sm font-medium whitespace-no-wrap">
                                                <dt className="sr-only">Name</dt>
                                                <dd className="text-gray-900 dark:text-gray-100">
                                                    {c.login}
                                                </dd>
                                                <dt className="sr-only">Github</dt>
                                                <dd>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer "
                                                        href={c.html_url}
                                                        className="text-teal-600 hover:text-teal-700">
                                                        @{c.login}
                                                    </a>
                                                </dd>
                                            </dl>
                                        </li>
                                    );
                                })}
                        </ul>
                    </dd>
                </dl>
            </main>
        </div>
    );
}

export const getStaticProps = async () => {
    const repo = await fetcher('https://api.github.com/repos/gautam-jha/memehub');
    const contributors = await fetcher(
        'https://api.github.com/repos/gautam-jha/memehub/contributors'
    );
    return {
        props: { repo, contributors },
        revalidate: 15
    };
};
