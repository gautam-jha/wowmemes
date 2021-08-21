import Head from 'next/head';
import { Navbar, Footer, Sidebar, Featured } from './index';

/**
 * Layout is made to wrap a common layout for multiple pages.
 * @date 2021-07-22
 * @param {any} {children
 * @param {any} featured}
 * @returns {any}
 */
export default function Layout({ children, featured }) {
    return (
        <div className="bg-blue-50 dark:bg-black dark:bg-opacity-80 ">
            <Head>
                <title>WowMemes - Find Best Meme Collections</title>
                <meta name="description" content="WowMemes - Find Your Favorite Free Memes" />
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="google-site-verification"
                    content="ytluGmwzLOUZL24jkQBlizLfKSvv756kraKONPFP4es"
                />
            </Head>

            <Navbar />
            <main className="container mx-auto px-4 ">
                <div className="grid grid-cols-6 gap-3">
                    <Sidebar category="funny" classname="col-span-6 md:col-span-1" />
                    <div className="col-span-6 md:col-span-3 overflow-auto">{children}</div>
                    {featured && <Featured featured={featured} />}
                </div>
            </main>
            <Footer />
        </div>
    );
}
