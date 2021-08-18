import prefix from './prefix';

const fetcher = async url => {
    const response = await fetch(url);
    const data = response.json();
    return data;
};

const getMemesByCategory = async (cat, count) => {
    const data = await fetcher(`${prefix}/api/random/${cat}/${count}/`);
    return data;
};

export { fetcher, getMemesByCategory };
