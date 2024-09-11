export default function sitemap() {
    return [
      {
        url: 'https://aryanpamwani.me/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://aryanpamwani.me/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://aryanpamwani.me/skills',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://aryanpamwani.me/projects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
      {
        url: 'https://aryanpamwani.me/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
    ]
  }