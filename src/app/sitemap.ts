import type { MetadataRoute } from "next";
import { RESUME_DATA } from "@/data/resume-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    RESUME_DATA.personalWebsiteUrl ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://cv.example.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}