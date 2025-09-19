/**
 * Generic function to fetch data from a given url
 * @param {string} url 
 * @returns 
 */
export const getData = async (url) => {
    try {
        const res = await fetch(url);
        const items = await res.json();
        return items;
    } catch (error) {
        return {
            error,
        };
    }
}