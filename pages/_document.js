{
  /* Need to reload NEXT */
}
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        {/* Any Header from other pages is append to this */}
        <Head>
          <style>{`body {background: #069}`}</style>
        </Head>
        <body>
          {/* Content of pages rendered */}
          <Main />
          {/* Content of Scripts to append to the document */}
          <NextScript />
        </body>
      </html>
    );
  }
}
