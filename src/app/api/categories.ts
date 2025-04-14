import { query } from "@lib/strapi";
import type { Response } from "../types/Response";
import type { Category } from "../types/Category";

export async function getCategories(): Promise<Response<Category[]>> {
    try {
        const res = await query("categories");

        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);

        return { success: false, error: "Failed to fetch categories" }
    }
}
