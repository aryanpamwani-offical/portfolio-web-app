import Head from 'next/head'
import React from 'react'

const SeoComp = ({title}) => {
  return (
    <Head>
      <meta name='title' content={title}/>
      <title>{title}</title>
      <meta name='description' content="Hi, I’m Aryan Pamwani, a 21-year-old B.Pharm student at RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya). Passionate about UI/UX design, I love exploring creative solutions using tools like Figma. When I’m not studying, I’m immersed in the world of design, learning about user experience and creating intuitive interfaces."/>
      <meta name='keywords' content="aryanpamwani, aryan pamwani aryan pamwni aryanpanjwani web developer website development web designer"/>
      <meta name="robots" content="index, follow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta charset="UTF-8"></meta>
      <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png"/>
<link rel="icon" href="./favicon.ico" sizes="any" />
<link rel="manifest" href="./site.webmanifest"></link>

    </Head>
  )
}

export default SeoComp