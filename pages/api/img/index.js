const request = require('request');

function handler(req, res) {
    res.status(500).json('Unauthorized!');
}

export default handler;
