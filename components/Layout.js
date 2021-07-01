import Head from 'next/head';

import { Header, Footer, Sidebar } from './index';

export default function Layout({ children }) {
    return (
        <div className="bg-blue-50 dark:bg-black dark:bg-opacity-80 ">
            <Head>
                <title>Random Memes</title>
                <meta name="description" content="Random Memes by Gauti." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="container mx-auto px-4 pt-10">
                <div className="sm:flex md:grid  md:grid-cols-3 gap-4">
                    <Sidebar category="funny" />
                    <div className="col-span-2">{children}</div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
