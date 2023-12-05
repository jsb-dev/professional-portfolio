import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/16x16_favicon.ico" sizes="16x16" />
                    <link rel="icon" href="/32x32_favicon.ico" sizes="32x32" />
                    <link rel="icon" href="/64x64_favicon.ico" sizes="64x64" />
                    <link rel="icon" href="/256x256_favicon.ico" sizes="128x128" />
                    <link rel="icon" href="/256x256_favicon.ico" sizes="192x192" />
                    <link rel="icon" href="/256x256_favicon.ico" sizes="228x228" />
                    <link rel="icon" href="/256x256_favicon.ico" sizes="256x256" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
