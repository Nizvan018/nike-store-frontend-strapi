export const formatPrice = (price: number, currency: string, locale: string) => {
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency
    });

    return formatter.format(price);
}