import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang={`en`}>
                <Head>
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-D4PD3LDD4W`}
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', 'G-D4PD3LDD4W');
                            `,
                        }}
                    />
                    <meta charSet={`utf-8`} />
                    <meta
                        name={`description`}
                        content={`🎙️ A podcast where we're joined by a “Third Wheel” each episode to learn a bit more about them, debate various topics and (occasionally) play some games whilst your hosts Aaron & Hamish take shots at each other and act as if they understand everything being spoken about 🙃. New episode every Sunday! 🚨`}
                    />
                    <link rel={`canonical`} href={`https://thethirdwheel.fm`} />
                    <meta name={`theme-color`} content={`#4adfb8`} />
                    <meta property={`og:title`} content={`The Third Wheel`} />
                    <meta
                        property={`og:description`}
                        content={`🎙️ A podcast where we're joined by a “Third Wheel” each episode to learn a bit more about them, debate various topics and (occasionally) play some games whilst your hosts Aaron & Hamish take shots at each other and act as if they understand everything being spoken about 🙃. New episode every Sunday! 🚨`}
                    />
                    <meta
                        property={`og:image`}
                        content={`https://res.cloudinary.com/aaronconway7/image/upload/v1610310198/the-third-wheel/facebook-cover-art.jpg`}
                    />
                    <meta property={`og:url`} content={`https://thethirdwheel.fm`} />
                    <meta name={`twitter:card`} content={`summary_large_image`} />
                    <meta property={`og:site_name`} content={`The Third Wheel`} />
                    <meta name={`twitter:image:alt`} content={`The Third Wheel`} />
                    <link
                        rel={`apple-touch-icon`}
                        sizes={`180x180`}
                        href={`/apple-touch-icon.png`}
                    />
                    <link
                        rel={`icon`}
                        type={`image/png`}
                        sizes={`32x32`}
                        href={`/favicon-32x32.png`}
                    />
                    <link
                        rel={`icon`}
                        type={`image/png`}
                        sizes={`16x16`}
                        href={`/favicon-16x16.png`}
                    />
                    <link rel={`manifest`} href={`/site.webmanifest`} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
