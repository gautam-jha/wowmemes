const request = require('request');

async function handler({ query: { slug } }, res) {
    if (slug[0] === undefined) {
        res.status(400);
        res.json('Not Found');
    }
    const tag = slug[0];
    const cursor = slug[1];

    const newUrl = `https://9gag.com/v1/tag-posts/tag/${tag}/type/trending?c=${cursor}`;
    res.status(200);
    const buff = await request.get(newUrl);
    res.json(buff);
}

export default handler;
