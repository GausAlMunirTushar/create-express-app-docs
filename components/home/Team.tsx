"use client";

import { TeamMember } from "@/data/team";
import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

interface TeamProps {
	members: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
	return (
		<section className="max-w-7xl mx-auto text-center py-12 px-8">
			<h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{members.map((member) => (
					<div
						key={member.name}
						className=" p-6 rounded-lg text-white shadow-md"
					>
						<div className="flex justify-center mb-4">
							<img
								src={member.avatar}
								alt={member.name}
								className="h-16 w-16 rounded-full object-cover"
							/>
						</div>
						<h3 className="text-xl font-semibold mb-2">
							{member.name}
						</h3>
						<p className="text-gray-400 mb-4">{member.role}</p>
						<p className="text-sm mb-6">{member.bio}</p>
						<div className="flex justify-center gap-4">
							{member.github && (
								<Link
									href={member.github}
									target="_blank"
									className="text-white hover:text-gray-400 transition"
								>
									<FaGithub className="w-5 h-5" />
								</Link>
							)}
							{member.x && (
								<Link
									href={member.x}
									target="_blank"
									className="text-white hover:text-gray-400 transition"
								>
									<FaXTwitter className="w-5 h-5" />
								</Link>
							)}
							{member.linkedin && (
								<Link
									href={member.linkedin}
									target="_blank"
									className="text-white hover:text-gray-400 transition"
								>
									<FaLinkedin className="w-5 h-5" />
								</Link>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
