import Header from "@components/shop/Header";
import Products from "@components/shop/Products";
import { Suspense } from "react";
import ProductsSkeleton from "@components/skeletons/shop/ProductsSkeleton";

interface Params {
    params: Promise<{
        categorySlug: string;
    }>
}

const CategoryPage = async ({ params }: Params) => {
    const { categorySlug } = await params;

    return (
        <main className="flex flex-col items-center gap-48 pb-48">
            <Header category={categorySlug} />

            <Suspense fallback={<ProductsSkeleton category={categorySlug} />}>
                <Products category={categorySlug} />
            </Suspense>
        </main>
    )
}

export default CategoryPage;
