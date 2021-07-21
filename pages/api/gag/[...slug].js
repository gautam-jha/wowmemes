import { fetcher } from '../../../helper';

/**
 * This will expose the api url for following
 * /api/gag/memes/10/
 * @date 2021-07-22
 * @param {any} {query:{slug}}
 * @param {any} res
 * @returns {object}
 */
async function handler({ query: { slug } }, res) {
    if (slug[0] === undefined) {
        res.status(400);
        res.json('Not Found');
    }
    const tag = slug[0];
    const cursor = slug[1];

    const data = await fetcher(
        `https://9gag.com/v1/tag-posts/tag/${tag}/type/trending?c=${cursor}&nsfw=1`
    );
    // const buff = await request.get(newUrl);
    res.status(200);
    res.json(data);
}

export default handler;
