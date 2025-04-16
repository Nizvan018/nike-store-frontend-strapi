import { query } from "../lib/strapi";
import type { Response } from "../types/Response";
import type { Product } from "../types/Product";

const strapiUrl = process.env.STRAPI_URL as string;

export async function getFeaturedProducts(): Promise<Response<Product[]>> {
    try {
        const res = await query("products?filters[isFeatured][$eq]=true&populate=*");

        const products: Product[] = res.data;

        products.forEach(product => {
            const images = product.images;

            const fixedImages = images.map(image => {
                image.url = `${strapiUrl}${image.url}`;

                return image;
            });

            product.images = fixedImages;
        });

        return { success: true, data: products }
    } catch (error) {
        console.error(error);

        return { success: false, error: "Failed to fetch featured products" };
    }
}
