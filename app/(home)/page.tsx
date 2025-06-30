import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import JoinCommunity from "@/components/home/JoinCommunity";
import Team from "@/components/home/Team";
import { teamMembers } from "@/data/team";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Team members={teamMembers} />
			<JoinCommunity />
			<Footer />
		</>
	);
}
