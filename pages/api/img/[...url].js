const request = require('request');

async function handler({ query: { url } }, res) {
    if (url[0] === undefined) {
        res.status(400);
        res.json('Not Found');
    }
    // console.log(url);
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const newUrl = decodeURIComponent(url[0]);
    res.status(200);
    const buff = await request.get(newUrl);
    res.send(buff);
}

export default handler;
