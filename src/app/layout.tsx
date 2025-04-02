import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const getPoppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Strapi + Next.js 15",
	description: "Store made with Strapi + Next.js 15",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body
				className={`${getPoppins.className} antialiased`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
