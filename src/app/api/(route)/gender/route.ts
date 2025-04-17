import { query } from "@/app/lib/strapi";
import { NextResponse } from "next/server";

/**
 * Returns the genders enum
 * 
 * @returns NextResponse
 */
export async function GET() {
    try {
        const res = await query("content-type-builder/content-types/api::product.product");

        return NextResponse.json(res.data.schema.attributes.gender.enum, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "An unexpected error has ocurred while fetching genders", message: (error as Error).message }, { status: 500 });
    }
}