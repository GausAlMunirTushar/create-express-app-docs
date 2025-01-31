import { CreateAppAnimation } from "@/components/ui/CreateAppAnimation";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";

const Hero = () => {
	return (
		<main className="container mx-auto flex flex-1 flex-col  text-center">
			<div className="flex items-center justify-center mt-12">
				<Image
					src={Logo}
					alt="Create Express Appp Logo"
					width={100}
					height={100}
				/>
			</div>
			<h1 className="my-4 text-7xl font-extrabold">Create Express App</h1>
			<div className="flex items-center justify-center gap-3">
				<Link
					href="/docs"
					className="text-fd-foreground font-semibold underline"
				>
					<button className="px-4 py-2 bg-gray-800 text-white rounded-lg dark:bg-white dark:text-gray-800 cursor-pointer">
						Read Docs
					</button>
				</Link>{" "}
				<button className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-300">
					See Template
				</button>
			</div>

			<div className="w-56 flex  mx-auto my-3">
				<DynamicCodeBlock lang="bash" code="npx create-ex-app my-app" />
			</div>
			<div className="w-full">
				<div className="w-4/12">
					<CreateAppAnimation />
				</div>
			</div>
		</main>
	);
};
export default Hero;
