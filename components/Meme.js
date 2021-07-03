import {
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon,
    PinterestShareButton,
    PinterestIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon
    // WhatsappShareButton,
    // WhatsappIcon
} from 'next-share';

import Loader from './Loader';
import styles from '../styles/Meme.module.css';

function Meme(props) {
    const { data, loading } = props;

    return data && !loading ? (
        <div
            className={`${styles.meme} rounded overflow-hidden shadow-lg bg-white dark:bg-white dark:bg-opacity-5 dark:border-black dark:hover:border-yellow-300`}>
            <img
                className="w-full lazy"
                srcSet={`${data.url}  375w`}
                alt={data.title}
                sizes="(min-width: 400px) 80vw, 100vw"
                height="400"
                width="400"
            />
            <div className="px-6 py-4 m-1 social_icons">
                <div className="font-bold text-sm mb-2">{data.title}</div>
                <FacebookShareButton
                    url={data.url}
                    quote={data.title}
                    className="m-5"
                    // hashtag={'#random-next-meme'}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LineShareButton url={data.url} title={data.title} className="m-5">
                    <LineIcon size={32} round />
                </LineShareButton>
                <PinterestShareButton url="https://random-next-meme.vercel.app/" media={data.url}>
                    <PinterestIcon size={32} round />
                </PinterestShareButton>

                <TelegramShareButton url={data.url} title={data.title}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                <TwitterShareButton url={data.url} title={data.title}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                {/* <WhatsappShareButton url={data.url} title={data.title} separator=":: ">
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton> */}
            </div>
        </div>
    ) : (
        <Loader />
    );
}

export default Meme;
