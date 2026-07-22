import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fonteslex.com",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
