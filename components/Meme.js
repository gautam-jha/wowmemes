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

import styles from '../styles/Meme.module.css';

function Meme(props) {
    const { data, loading } = props;
    const loadingUrl =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzIyMkEzMDt9Cgkuc3Qxe2ZpbGw6Izg2ODY4Nzt9Cgkuc3Qye2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzIyMkEzMDtzdHJva2U6IzIyMkEzMDtzdHJva2Utd2lkdGg6MC43NzY7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMyMjJBMzA7ZmlsbC1vcGFjaXR5OjA7c3Ryb2tlOiMyMjJBMzA7c3Ryb2tlLXdpZHRoOjAuNzc2O30KCS5zdDR7ZmlsbDpub25lO3N0cm9rZTojMjIyQTMwO3N0cm9rZS13aWR0aDoxLjU1NTY7c3Ryb2tlLW9wYWNpdHk6MC41O30KCS5zdDV7ZmlsbDpub25lO3N0cm9rZTojMjIyQTMwO3N0cm9rZS13aWR0aDoxLjU1NTY7fQoJLnN0NntmaWxsOiMwNzA3MDc7fQo8L3N0eWxlPjxnIGlkPSJkb3RfeDVGX2NpcmNsZV94NUZfc3Bpbm5lcl94NUZfOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAxKSI+PGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iMjUuNCIgY3k9IjE1IiByPSIyLjYiPjxhbmltYXRlIGFjY3VtdWxhdGU9Im5vbmUiIGFkZGl0aXZlPSJyZXBsYWNlIiBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGJlZ2luPSIwcyIgY2FsY01vZGU9ImxpbmVhciIgZHVyPSIxLjNzIiBmaWxsPSJyZW1vdmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiByZXN0YXJ0PSJhbHdheXMiIHZhbHVlcz0iMTswOzA7MDswOzA7MDswIi8+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMjIuMSIgY3k9IjIzLjEiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzE7MDswOzA7MDswOzAiLz48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNCIgY3k9IjI2LjQiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzA7MTswOzA7MDswOzAiLz48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSI1LjkiIGN5PSIyMy4xIiByPSIyLjYiPjxhbmltYXRlIGFjY3VtdWxhdGU9Im5vbmUiIGFkZGl0aXZlPSJyZXBsYWNlIiBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGJlZ2luPSIwcyIgY2FsY01vZGU9ImxpbmVhciIgZHVyPSIxLjNzIiBmaWxsPSJyZW1vdmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiByZXN0YXJ0PSJhbHdheXMiIHZhbHVlcz0iMDswOzA7MTswOzA7MDswIi8+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMi42IiBjeT0iMTUiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzA7MDswOzE7MDswOzAiLz48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSI1LjkiIGN5PSI2LjkiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzA7MDswOzA7MTswOzAiLz48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPSJzdDMiIGN4PSIxNCIgY3k9IjMuNiIgcj0iMi42Ij48YW5pbWF0ZSBhY2N1bXVsYXRlPSJub25lIiBhZGRpdGl2ZT0icmVwbGFjZSIgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IiBiZWdpbj0iMHMiIGNhbGNNb2RlPSJsaW5lYXIiIGR1cj0iMS4zcyIgZmlsbD0icmVtb3ZlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgcmVzdGFydD0iYWx3YXlzIiB2YWx1ZXM9IjA7MDswOzA7MDswOzE7MCIvPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjIyLjEiIGN5PSI2LjkiIHI9IjIuNiI+PGFuaW1hdGUgYWNjdW11bGF0ZT0ibm9uZSIgYWRkaXRpdmU9InJlcGxhY2UiIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIgYmVnaW49IjBzIiBjYWxjTW9kZT0ibGluZWFyIiBkdXI9IjEuM3MiIGZpbGw9InJlbW92ZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHJlc3RhcnQ9ImFsd2F5cyIgdmFsdWVzPSIwOzA7MDswOzA7MDswOzEiLz48L2NpcmNsZT48L2c+PC9zdmc+';
    return (
        data && (
            <div
                className={`${styles.meme} rounded overflow-hidden shadow-lg bg-white dark:bg-white dark:bg-opacity-5 dark:border-black dark:hover:border-yellow-300`}>
                {!loading ? (
                    <img
                        className="w-full lazy"
                        srcSet={`${data.url}  375w`}
                        alt={data.title}
                        sizes="(min-width: 400px) 80vw, 100vw"
                    />
                ) : (
                    <img
                        className="lazy"
                        src={loadingUrl}
                        alt={data.title}
                        width="50"
                        height="50"
                    />
                )}
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
                    <PinterestShareButton
                        url="https://random-next-meme.vercel.app/"
                        media={data.url}>
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
        )
    );
}

export default Meme;
