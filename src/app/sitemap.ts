import { MetadataRoute } from "next";

function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://juliomartins.dev",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://juliomartins.dev/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://juliomartins.dev/content",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://juliomartins.dev/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

export default sitemap;
