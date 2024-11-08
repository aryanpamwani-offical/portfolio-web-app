export default function sitemap() {
    return [
      {
        url: 'https://aryanpamwani.ine/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://aryanpamwani.ine/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://aryanpamwani.ine/skills',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://aryanpamwani.ine/projects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
      {
        url: 'https://aryanpamwani.ine/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
    ]
  }