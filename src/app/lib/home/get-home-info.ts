import { query } from "../strapi";

const { STRAPI_HOST } = process.env;

export function getHomeInfo() {
    return query("home?populate=shoes").then(res => {
        const { shoes } = res.data;

        const images = shoes.map((shoe: any) => `${STRAPI_HOST}${shoe.url}`);

        return { images };
    });
}