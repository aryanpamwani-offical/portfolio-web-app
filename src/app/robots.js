

export default function robots()  {

 return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio',
    },
    sitemap: 'https://aryanpamwani.in/sitemap.xml',
  }
}

