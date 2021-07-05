function handler({ query: { slug } }, res) {
    let page = slug[1];
    const count = slug[2];

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
