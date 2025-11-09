import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

// Global SEO Metadata
export const metadata: Metadata = {
	title: {
		default: "Create Express App — Your Backend, Ready to Build",
		template: "%s | Create Express App",
	},
	description:
		"Create Express App is a CLI tool that simplifies Express.js app creation. It generates ready-to-use project structures with templates for JavaScript and TypeScript — perfect for fast backend scaffolding.",
	keywords: [
		"create express app",
		"express.js",
		"express generator",
		"node.js",
		"backend development",
		"javascript framework",
		"typescript",
		"cli tool",
		"web development",
		"express setup",
		"scaffold express app",
	],
	metadataBase: new URL("https://create-express-app.vercel.app"),
	openGraph: {
		title: "Create Express App — Your Backend, Ready to Build",
		description:
			"A CLI tool that scaffolds your Express.js backend in seconds. Choose JavaScript or TypeScript and start building right away.",
		url: "https://create-express-app.vercel.app",
		siteName: "Create Express App",
		images: [
			{
				url: "https://create-express-app.vercel.app/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Create Express App OG Image",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Create Express App — Express.js Scaffolding CLI",
		description:
			"The fastest way to start an Express.js project — with built-in templates for JS & TS.",
		creator: "@gausalmunirtushar",
		images: ["https://create-express-app.vercel.app/og-image.jpg"],
	},
	alternates: {
		canonical: "https://create-express-app.vercel.app",
	},
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider>{children}</RootProvider>
			</body>
			<GoogleAnalytics gaId="G-JHN6ELKSS2" />
		</html>
	);
}
