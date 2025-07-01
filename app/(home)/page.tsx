import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import JoinCommunity from "@/components/home/JoinCommunity";
import Sponsor from "@/components/home/Sponsor";
import Team from "@/components/home/Team";
import { teamMembers } from "@/data/team";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Features />
			<Team members={teamMembers} />
			<Sponsor />
			<JoinCommunity />
			<Footer />
		</>
	);
}
