import NineGag from '9gag';
// import
const { Scraper } = NineGag;
// const Downloader = NineGag.Downloader;

export default async (req, res) => {
    try {
        const scraper = new Scraper(5, 'fresh', 0);
        const posts = await scraper.scrap();
        try {
            res.statusCode = 200;
            res.json(posts);
        } catch (error) {
            res.statusCode = 200;
            res.json([]);
        }
    } catch (err) {
        res.statusCode = 500;
        res.json({ error: 'Something went wrong' });
    }
};

// memes();
