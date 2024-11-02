

export default function robots()  {

 return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio',
    },
    sitemap: 'https://aryanpamwani.me/sitemap.xml',
  }
}

