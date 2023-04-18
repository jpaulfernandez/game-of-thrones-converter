import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <title>Maester's Manual</title>
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
