import Document, { Main, NextScript } from 'next/document';
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

  setGoogleTags = () => {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-136664868-1')
    `
    };
  };

  render() {
    return (
      <html>
        {this.props.styleTags}
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-136664868-1"
          />
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
        </>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
