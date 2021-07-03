import ContentLoader from 'react-content-loader';

const Loader = props => (
    <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-white dark:bg-opacity-5 dark:border-black dark:hover:border-yellow-300 mt-5">
        <ContentLoader
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 490"
            backgroundColor="#575757"
            foregroundColor="#383838"
            className="sm:max-w-full w-screen"
            {...props}>
            <rect x="82" y="413" rx="2" ry="2" width="250" height="10" />
            <rect x="0" y="0" rx="2" ry="2" width="400" height="400" />
            <circle cx="130" cy="445" r="10" />
            <circle cx="163" cy="445" r="10" />
            <circle cx="260" cy="444" r="10" />
            <circle cx="197" cy="445" r="10" />
            <circle cx="230" cy="444" r="10" />
        </ContentLoader>
    </div>
);

export default Loader;
