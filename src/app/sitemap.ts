import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.meta.baseUrl;
  const routes = [
    "",
    "/forge",
    "/threads",
    "/games",
    "/results",
    "/pricing",
    "/about",
    "/contact",
    "/policies",
    "/faq",
    "/apply",
    "/programs",
    "/sponsors"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
