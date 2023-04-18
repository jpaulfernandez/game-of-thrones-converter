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
      </Head>
      <body className='bg-kings-landing'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
