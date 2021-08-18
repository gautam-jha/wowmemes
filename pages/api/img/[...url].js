const request = require('request');

/**
 * This api is to return a 3rd party website image though the single domain, to avoid next/image cross domain problem.
 * @date 2021-07-22
 * @param {any} {query:{url}}
 * @param {any} res
 * @returns {image}
 */
async function handler({ query: { url } }, res) {
    if (url[0] === undefined) {
        res.status(400);
        res.json('Not Found');
    }
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const newUrl = decodeURIComponent(url[0]);
    res.status(200);
    const buff = await request.get(newUrl);
    res.send(buff);
}

export default handler;
