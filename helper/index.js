const fetcher = async url => {
    const response = await fetch(url);
    const data = response.json();
    return data;
};

const getMemes = async (count, { memes, setMemes }) => {
    const data = await fetcher(`/api/random/${count}/`);
    setMemes([
        ...new Map([...memes, ...(data?.memes ?? data)].map(item => [item.ups, item])).values()
    ]);
};

const getSingleMemes = async () => {
    const data = await fetcher(`/api/random/suffle/`);
    return data;
};

const getMemesByCategory = async (cat, count) => {
    const data = await fetcher(`/api/random/${cat}/${count}/`);
    return data;
};

export { fetcher, getMemes, getSingleMemes, getMemesByCategory };
