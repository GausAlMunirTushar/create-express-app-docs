import { CreateAppAnimation } from "@/components/ui/CreateAppAnimation";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.svg";

export default function HomePage() {
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
			<p className="text-fd-muted-foreground">
				You can open{" "}
				<Link
					href="/docs"
					className="text-fd-foreground font-semibold underline"
				>
					/docs
				</Link>{" "}
				to see the documentation. and see the documentation.
			</p>{" "}
			<div className="w-32">
				<DynamicCodeBlock lang="bash" code="npx create-ex-app" />
			</div>
			*/
			<div className="w-full">
				<div className="w-4/12">
					<CreateAppAnimation />
				</div>
			</div>
		</main>
	);
}
