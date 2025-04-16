import Header from "@components/shop/Header";
import Products from "@components/shop/Products";

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

            <Products category={categorySlug} />
        </main>
    )
}

export default CategoryPage;
