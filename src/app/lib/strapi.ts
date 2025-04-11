const { STRAPI_URL, STRAPI_API_TOKEN } = process.env;

export function query(url: string) {
    return fetch(`${STRAPI_URL}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`
        }
    }).then(res => {
        return res.json();
    });
}
