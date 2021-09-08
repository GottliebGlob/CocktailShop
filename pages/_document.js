import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <meta name="keywords" content="cocktail shop" />
                    <meta charSet="utf-8" />

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
