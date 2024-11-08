export default function sitemap() {
    return [
      {
        url: 'https://www.aryanpamwani.in',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://www.aryanpamwani.inabout',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://www.aryanpamwani.inskills',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://www.aryanpamwani.inprojects',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
      {
        url: 'https://www.aryanpamwani.incontact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.3,
      },
    ]
  }