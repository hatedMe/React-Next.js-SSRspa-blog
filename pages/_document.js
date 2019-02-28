/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render () {
        return (
            <html>
                <Head>
                    <link rel='stylesheet' href='/_next/static/style.css' />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta httpEquiv="description" content="蒋敏web前端个人博客"/>
                    <meta name="Keywords" content="蒋敏,个人网站,个人博客,  web前端" />
                    <meta name="Description" content="蒋敏个人博客" />
                    <meta name="author" content="蒋敏" />
                    <title>蒋敏个人博客</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
