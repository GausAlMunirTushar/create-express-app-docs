import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	githubUrl: "https://github.com/GausAlMunirTushar/create-express-app",

	nav: {
		title: (
			<>
				<Image src="/logo.svg" alt="logo" width={32} height={32} />
				<span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
					Create Express App
				</span>
			</>
		),
	},
	links: [
		{
			text: "Docs",
			url: "/docs",
			active: "nested-url",
		},
	],
};
