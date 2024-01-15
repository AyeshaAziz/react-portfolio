const PATH_PREFIX = '/assets/'; 
export const getImageUrl = (path) => {
    return new URL(`${PATH_PREFIX}${path}`, import.meta.url).href;
};