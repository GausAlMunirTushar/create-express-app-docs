import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "Create Express App - is a CLI tool that simplifies the creation of Express.js applications",
	description:
		"Create Express App is a CLI tool that simplifies the creation of Express.js applications. It generates a ready-to-use project structure with pre-configured templates for JavaScript and TypeScript applications. Perfect for developers who want to quickly scaffold an Express.js project and start coding right away.",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
