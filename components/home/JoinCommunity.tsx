"use client";

import Link from "next/link";
import {
	FaXTwitter,
	FaGithub,
	FaDiscord,
	FaLinkedin,
	FaYoutube,
} from "react-icons/fa6";

const JoinCommunity = () => {
	return (
		<section className="text-center py-12">
			{/* Heading */}
			<h2 className="text-2xl font-semibold">Join our community</h2>
			<p className="text-gray-500 text-lg mb-6">
				of developers & engineers
			</p>

			{/* Social Icons */}
			<div className="flex justify-center gap-4">
				<Link
					href="https://x.com/GausAlMunir"
					target="_blank"
					className="p-3 rounded-md border  transition"
				>
					<FaXTwitter className="w-5 h-5" />
				</Link>
				<Link
					href="https://github.com/GausAlMunirTushar/create-express-app"
					target="_blank"
					className="p-3 rounded-md border transition"
				>
					<FaGithub className="w-5 h-5" />
				</Link>
				<Link
					href="https://discord.gg/"
					target="_blank"
					className="p-3 rounded-md border  transition"
				>
					<FaDiscord className="w-5 h-5" />
				</Link>
				<Link
					href="https://linkedin.com/in/GausAlMunirTushar"
					target="_blank"
					className="p-3 rounded-md border  transition"
				>
					<FaLinkedin className="w-5 h-5" />
				</Link>
				<Link
					href="https://youtube.com/GausAlMunirTushar"
					target="_blank"
					className="p-3 rounded-md border transition"
				>
					<FaYoutube className="w-5 h-5" />
				</Link>
			</div>
		</section>
	);
};

export default JoinCommunity;
