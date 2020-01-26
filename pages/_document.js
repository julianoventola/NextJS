{
  /* Need to reload NEXT */
}
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        {/* Any Header from other pages is append to this */}
        <Head>{this.props.styleTags}</Head>
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
