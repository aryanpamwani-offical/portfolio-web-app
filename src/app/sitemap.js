export default function sitemap() {
    return [
      {
        url: 'https://www.aryanpamwani.in/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        
        priority: 1,
      },
      {
        url: 'https://www.aryanpamwani.in/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.aryanpamwani.in/skills',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://www.aryanpamwani.in/projects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
      {
        url: 'https://www.aryanpamwani.in/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
    ]
  }