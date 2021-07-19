import Head from 'next/head';
// import { fetcher } from '../helper';

import { Navbar, Footer, Sidebar, Featured } from './index';
// import styles from '../styles/Meme.module.css';

export default function Layout({ children, featured }) {
    return (
        <div className="bg-blue-50 dark:bg-black dark:bg-opacity-80 ">
            <Head>
                <title>MemeHub - Find Best Meme Collections</title>
                <meta name="description" content="MemeHub - Find Your Favorite Free Memes" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="google-site-verification"
                    content="ytluGmwzLOUZL24jkQBlizLfKSvv756kraKONPFP4es"
                />
                {/* eslint-disable */}

                {/* eslint-enable */}
            </Head>

            <Navbar />

            <main className="container mx-auto px-4 ">
                <div className="grid grid-cols-6 gap-3">
                    <Sidebar category="funny" classname="col-span-6 md:col-span-1" />
                    <div className="col-span-6 md:col-span-3 overflow-auto">{children}</div>
                    <Featured featured={featured} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
