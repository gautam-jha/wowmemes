import prefix from './prefix';

const fetcher = async url => {
    const response = await fetch(url);
    const data = response.json();
    return data;
};

const getMemesByCategory = async (type, cat, count) => {
    const cursor = count ? `${count}` : '';
    const data = await fetcher(`${prefix}/api/gag/${type}/${cat}/${cursor}/`);
    return data;
};

export { fetcher, getMemesByCategory };
