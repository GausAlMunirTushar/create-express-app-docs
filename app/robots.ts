// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://create-express-app.vercel.app";

	return {
		rules: {
			userAgent: "*",
			allow: ["/"],
			disallow: ["/api/", "/_next/", "/static/"],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
