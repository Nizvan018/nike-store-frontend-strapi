import { query } from "@/app/lib/strapi";
import { NextResponse } from "next/server";
import { Product } from "@/app/types/Product";

interface Params {
    params: Promise<{
        slug: string;
    }>
}

/**
 * Returns products of a specific category
 * 
 * @param {Request} request - The request object.
 * @param {Params} params - The parameters containing the slug of the category.
 * @returns NextResponse
 */
export async function GET(request: Request, { params }: Params) {
    try {
        const { slug } = await params;
        const res = await query(`products?filters[slug][$eq]=${slug}&populate=*`);

        const products: Product[] = res.data;

        // If doesn't exist any product with that slug, return 404
        if (products.length === 0) {
            return NextResponse.json({ error: "No products found with that slug" }, { status: 404 });
        }

        // Fix images URL:

        const product = products[0];

        const fixedImages = product.images.map(image => {
            image.url = `${process.env.STRAPI_URL}${image.url}`;

            return image;
        });

        product.images = fixedImages;

        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch products with that category`, message: (error as Error).message }, { status: 500 });
    }
}