import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
    const locale = props.__NEXT_DATA__.locale || 'sr'; // fallback
  return (
    <Html lang={locale}>
        <Head/>
        <body className="antialiased">
            <Main />
            <NextScript />
        </body>
    </Html>
  );
}
