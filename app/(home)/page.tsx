import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import JoinCommunity from "@/components/home/JoinCommunity";
import Team from "@/components/home/Team";
import { teamMembers } from "@/data/team";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Express App — Your Backend, Ready to Build",
  description:
    "Create Express App is a CLI tool that scaffolds Express.js backends instantly. Choose JavaScript or TypeScript templates and start coding in seconds.",
  keywords: [
    "create express app",
    "express.js",
    "express generator",
    "node.js",
    "backend development",
    "typescript",
    "cli tool",
    "web development",
    "scaffold express app",
  ],
  alternates: {
    canonical: "https://create-express-app.vercel.app",
  },
  openGraph: {
    title: "Create Express App — The Fastest Express.js CLI",
    description:
      "Instantly scaffold your Express.js backend with pre-configured JS/TS templates.",
    url: "https://create-express-app.vercel.app",
    siteName: "Create Express App",
    images: [
      {
        url: "https://create-express-app.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Create Express App Hero",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Express App — Your Backend, Ready to Build",
    description:
      "CLI tool that generates production-ready Express.js apps in seconds.",
    images: ["https://create-express-app.vercel.app/og-image.jpg"],
    creator: "@gausalmunirtushar",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Create Express App",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    description:
      "CLI tool that scaffolds Express.js apps with JavaScript or TypeScript templates.",
    url: "https://create-express-app.vercel.app",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
    },
  };

  return (
    <>
      <Script
        id="software-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <Team members={teamMembers} />
      <JoinCommunity />
      <Footer />
    </>
  );
}
