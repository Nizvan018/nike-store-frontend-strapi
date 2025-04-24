import Header from "@/app/components/product/Header";

interface Params {
    params: Promise<{
        productSlug: string;
    }>
}

const ProductPage = async ({ params }: Params) => {
    const { productSlug } = await params;

    return (
        <main>
            <Header productSlug={productSlug} />
        </main>
    )
}

export default ProductPage;
