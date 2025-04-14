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