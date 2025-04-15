import { query } from "../lib/strapi";
import type { Response } from "../types/Response";
import type { Product } from "../types/Product";

export async function getFeaturedProducts(): Promise<Response<Product[]>> {
    try {
        const res = await query("products?filters[isFeatured][$eq]=true&populate=*");

        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);

        return { success: false, error: "Failed to fetch featured products" };
    }
}

export async function getProductsByCategory(category: string): Promise<Response<Product[]>> {
    try {
        const res = await query(`products?filters[category][slug][$eq]=${category}&populate=*`);

        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);

        return { success: false, error: `Failed to fetch products of category: ${category}` }
    }
}
