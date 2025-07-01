"use client";

import { MdBuild, MdSettings, MdCode, MdSecurity } from "react-icons/md";

interface Feature {
	title: string;
	description: string;
	icon: React.ElementType;
}

const features: Feature[] = [
	{
		title: "Easy Setup",
		description:
			"Get your Express.js project up and running in seconds with pre-configured templates.",
		icon: MdBuild,
	},
	{
		title: "Customizable Templates",
		description:
			"Choose from different templates for JavaScript or TypeScript with integrated databases.",
		icon: MdSettings,
	},
	{
		title: "Fast Development",
		description:
			"Focus on building features, not setup. Enjoy a streamlined development process.",
		icon: MdCode,
	},
	{
		title: "Secure by Default",
		description:
			"Built-in security features to ensure your project is safe from common vulnerabilities.",
		icon: MdSecurity,
	},
];

const Features: React.FC = () => {
	return (
		<section className="max-w-7xl mx-auto py-12 px-8">
			<h2 className="text-3xl font-semibold text-center mb-8">
				Core Features
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{features.map((feature) => (
					<div
						key={feature.title}
						className=" p-6 rounded-lg text-white shadow-md transition-transform transform hover:scale-105"
					>
						<div className="flex justify-center mb-4">
							<feature.icon className="w-12 h-12 text-green-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">
							{feature.title}
						</h3>
						<p className="text-gray-400">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
