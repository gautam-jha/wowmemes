const request = require('request');

function handler({ query: { url } }, res) {
    if (url[0] === undefined) {
        res.status(400);
        res.json('Not Found');
    }
    res.status(200);
    request.get(url[0]).pipe(res);
}

export default handler;
