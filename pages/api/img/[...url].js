const request = require('request');

function handler({ query: { url } }, res) {
    // if (url[0] === undefined) {
    //     res.status(400);
    //     res.json('Not Found');
    // }
    // console.log(url);
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    const newUrl = decodeURIComponent(url[0]);
    res.status(200);
    request.get(newUrl).pipe(res);
}

export default handler;
