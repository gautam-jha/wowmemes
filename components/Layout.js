import Head from 'next/head';

import { Navbar, Footer, Sidebar, Featured } from './index';
import styles from '../styles/Meme.module.css';

export default function Layout({ children }) {
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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtag/js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','G-392E7F5M2E');`
                    }}
                />
                {/* eslint-enable */}
            </Head>

            <Navbar />

            <main className="container mx-auto px-4 ">
                <div className="grid grid-cols-6 gap-3">
                    <Sidebar category="funny" classname="col-span-6 md:col-span-1" />
                    <div className="col-span-6 md:col-span-3 overflow-auto">{children}</div>
                    <Featured />
                </div>
            </main>
            <Footer />
        </div>
    );
}
