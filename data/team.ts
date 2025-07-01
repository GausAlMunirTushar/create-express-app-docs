export interface TeamMember {
	name: string;
	avatar: string;
	role: string;
	bio: string;
	github?: string;
	x?: string;
	linkedin?: string;
}

export const teamMembers: TeamMember[] = [
	{
		name: "Gaus Al Munir Tushar",
		avatar: "/team/gaus-al-munir-tushar.jpg",
		role: "Creator of Create Express App",
		bio: "Gaus Al Munir Tushar is the creator of CEA and a passionate software engineer. He works at Texon.",
		github: "https://github.com/GausAlMunirTushar",
		x: "https://x.com/GausAlMunir",
		linkedin: "https://linkedin.com/in/GausAlMunirTushar",
	},
	{
		name: "Karsa Rigó",
		avatar: "/images/karsa-rigo.jpg", // Replace with the actual image path
		role: "Maintainer of Lucide & Software engineer @sztaki",
		bio: "Karsa is the maintainer of Lucide and a software engineer at Sztaki.",
		github: "https://github.com/karsarigo",
		linkedin: "https://linkedin.com/in/karsarigo",
	},
	{
		name: "Jakob Guddas",
		avatar: "/images/jakob-guddas.jpg", // Replace with the actual image path
		role: "Maintainer of Lucide & Software engineer @LEGO",
		bio: "Jakob is a maintainer of Lucide and works as a software engineer at LEGO.",
		github: "https://github.com/jakobguddas",
		linkedin: "https://linkedin.com/in/jakobguddas",
	},
];
