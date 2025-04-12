import Header from "@components/home/Header";
import Introduction from "@components/home/Introduction";
import FeaturedItemsSection from "@components/home/FeaturedItemsSection";

export default function Home() {
	return (
		<main className="flex flex-col items-center gap-48 pb-48">
			<Header />

			<Introduction />

			<FeaturedItemsSection />
		</main>
	);
}
