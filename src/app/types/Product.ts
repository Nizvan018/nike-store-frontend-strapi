export type Product = {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: string;
    active: boolean;
    price: number;
    color: string;
    grender: string;
    isFeatured: boolean;
    images: {
        id: number;
        documentId: string;
        alternativeText: string;
        url: string;
        width: number;
        height: number;
    }[],
    category: {
        id: number;
        documentId: string;
        name: string;
        slug: string;
    }
}