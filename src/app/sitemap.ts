import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.heraldago.com";
  const lastModified = new Date("2026-11-24");

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ungdomskort`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/xbit`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ipupisiciliani`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/sydbank`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tutora`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/thesis`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
