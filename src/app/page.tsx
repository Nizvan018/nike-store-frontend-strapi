import Header from "@components/home/Header";
import Introduction from "./components/home/Introduction";

export default function Home() {
	return (
		<main className="flex flex-col items-center gap-48">
			<Header />

			<Introduction />
		</main>
	);
}
