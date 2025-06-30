import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
import Logo from "public/logo.png";
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const logo = (
	<>
		<Image
			alt="CEA Logo"
			src={Logo}
			sizes="100px"
			className="hidden w-20 md:w-24 [.uwu_&]:block"
			aria-label="CEA Logo"
		/>
	</>
);
export const baseOptions: BaseLayoutProps = {
	githubUrl: "https://github.com/GausAlMunirTushar/create-express-app",

	nav: {
		title: (
			<>
				{logo}
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
