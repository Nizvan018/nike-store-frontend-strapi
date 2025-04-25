import Image from "next/image";
import { formatPrice } from "@/app/lib/formatPrice";
import { colors } from "@lib/colors";
import { getProductBySlug } from "@/app/api/products";
import { redirect } from "next/navigation";

interface Props {
    productSlug: string;
}

const Header = async ({ productSlug }: Props) => {
    const res = await getProductBySlug(productSlug);

    if (!res.success) {
        return redirect("/");
    }

    return (
        <header className="relative flex justify-center items-center w-full h-screen px-8 bg-gradient-to-br from-blue-zodiac-950 dark:from-slate-900 to-slate-950 dark:to-near-black duration-300 overflow-hidden">
            <div className="flex justify-center w-1/2">
                <div className="flex flex-col gap-4 w-full max-w-[480px]">
                    <h1 className="uppercase text-white text-6xl sm:text-7xl md:text-8xl font-bold italic duration-300">{res.data.name}</h1>
                    <p className="text-white font-light ml-3">{res.data.description}</p>
                    <div className="flex items-center gap-4 text-white mt-8">
                        <div
                            className="w-fit ml-3 text-sm font-medium text-black py-2 px-4 rounded-full bg-white cursor-pointer transition hover:bg-white/90"
                        >
                            Add to cart
                        </div>
                        <span>{formatPrice(res.data.price ?? 0, "USD", "en-US")}</span>
                    </div>
                </div>
            </div>
            <div className="relative hidden 2xl:flex justify-center items-center w-1/2 h-full">
                <Image
                    src={res.data.images[0].url ?? ""}
                    alt="Green Sneakers Mockup"
                    width={res.data.images[0].width}
                    height={res.data.images[0].height}
                    className="z-10 absolute h-[50%] w-auto -rotate-[12deg] drop-shadow-2xl"
                />
            </div>

            <div className={`absolute w-full h-full left-diagonal ${colors[res.data.color as "Green" ?? "Green"].bg}`}></div>
        </header>
    )
}

export default Header;
