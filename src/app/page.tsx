import Header from "@components/home/Header";
import Introduction from "@components/home/Introduction";
import TrendingItems from "@components/home/TrendingItems";
import { Suspense } from "react";
import TrendingItemsSkeleton from "./components/skeletons/home/TrendingItemsSkeleton";

export default function Home() {
	return (
		<main className="flex flex-col items-center gap-48">
			<Header />

			<Introduction />

			<Suspense fallback={<TrendingItemsSkeleton />}>
				<TrendingItems />
			</Suspense>
		</main>
	);
}
