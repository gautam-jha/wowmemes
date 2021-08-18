/**
 * Delivers diffrent subreddit post depends upon the subreddit
 * @date 2021-07-22
 * @param {any} {query:{slug}}
 * @param {any} res
 * @returns {any}
 */
function handler({ query: { slug } }, res) {
    let page = slug[1];
    const count = slug[2];

    /*
        the following block is to switch the subreddit account behind the scene 
        because api capabilities are limited.
    */
    if (page === 'india') {
        // choose random pick tag for country
        const india = [
            'IndianDankMemes',
            'merimarzi',
            'IndianMeyMeys',
            'SaimanSays',
            'indiameme',
            'bakchodi',
            'indianpeoplefacebook'
        ];
        const pick = india[Math.floor(Math.random() * india.length)];
        page = pick;
    }

    fetch(`https://meme-api.herokuapp.com/gimme/${page}/${count}`)
        .then(r => r.json())
        .then(data => {
            res.status(200).json(data);
        })
        .catch(() => res.status(500).json({ error: 'I am Error' }));
}

export default handler;
