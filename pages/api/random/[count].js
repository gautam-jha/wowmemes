function handler({ query: { count } }, res) {
    fetch(`https://meme-api.herokuapp.com/gimme/${count !== 'suffle' ? count : ''}`)
        .then(r => r.json())
        .then(data => {
            res.status(200).json(data);
        })
        .catch(() => res.status(500).json({ error: 'I am Error' }));
}

export default handler;
