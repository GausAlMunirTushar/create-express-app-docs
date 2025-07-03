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
		bio: "Gaus Al Munir Tushar is the creator of CEA, NewUI and a passionate Software Engineer. He works at Texon.",
		github: "https://github.com/GausAlMunirTushar",
		x: "https://x.com/GausAlMunir",
		linkedin: "https://linkedin.com/in/GausAlMunirTushar",
	},
	{
		name: "Shoriful Islam Ashiq",
		avatar: "/team/shoriful-islam-ashiq.jpg",
		role: "Maintainer of Create Express App",
		bio: "Md Shoriful Islam Ashiq, enthusiastic about os and software. Currently working as Junior Software Engineer at Code Studio.",
		github: "https://github.com/mdsiaofficial",
		x: "https://x.com/mdsiaofficial",
		linkedin: "https://linkedin.com/in/mdsiaofficial",
	},
];
