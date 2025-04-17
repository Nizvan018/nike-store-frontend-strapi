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
        const res = await query(`products?filters[category][slug][$eq]=${slug}&populate=*`);

        const products: Product[] = res.data;

        products.forEach(product => {
            const images = product.images;

            const fixedImages = images.map((image) => {
                image.url = `${process.env.STRAPI_URL}${image.url}`;

                return image;
            })

            product.images = fixedImages;
        });

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch products with that category`, message: (error as Error).message }, { status: 500 });
    }
}