import Head from 'next/head'
import 'typeface-kanit'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name={`viewport`} content={`width=device-width,initial-scale=1.0`} />
                <title>The Third Wheel</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
