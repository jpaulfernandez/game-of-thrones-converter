import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-YRP74J0TZZ" />
      <Script strategy='afterInteractive' id='google-analytics' dangerouslySetInnerHTML={
        {
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YRP74J0TZZ');`
        }
      }/>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Maester's Manual" />
        <meta name="description" content="Transform your words into the language of the Seven Kingdoms with just one click! Input any sentence, and watch as it's styled to sound like it was spoken in Game of Thrones" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://got.paulfernandez.dev/" />
        <meta property="og:title" content="Maester's Manual" />
        <meta property="og:description" content="Transform your words into the language of the Seven Kingdoms with just one click! Input any sentence, and watch as it's styled to sound like it was spoken in Game of Thrones" />
        <meta property="og:image" content="/mm.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://got.paulfernandez.dev/" />
        <meta property="twitter:title" content="Maester's Manual" />
        <meta property="twitter:description" content="Transform your words into the language of the Seven Kingdoms with just one click! Input any sentence, and watch as it's styled to sound like it was spoken in Game of Thrones" />
        <meta property="twitter:image" content="/mm.png" />
      </Head>
      <body className='bg-kings-landing'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
