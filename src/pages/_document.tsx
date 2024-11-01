import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

type NoncedDocument = DocumentInitialProps & { nonce: string };

const CustomDocument = (props: NoncedDocument) => {
  return (
    <Html prefix="og: https://ogp.me/ns#" lang="ja" nonce={props.nonce}>
      <Head nonce={props.nonce}>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="ethereumjapan.org" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ethereum Japan" />
        <meta
          property="og:image"
          content="https://ethereumjapan.org/images/hero-panda.png"
        />
        <meta
          property="og:description"
          content="Ethereum Japan aims to spread and support Ethereum use in Japan."
        />
        <meta
          name="description"
          content="Ethereum Japan aims to spread and support Ethereum use in Japan."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Ethereum_JP" />
        <meta property="csp-nonce" content={props.nonce} />
      </Head>

      <body nonce={props.nonce}>
        <Main />
        <NextScript nonce={props.nonce} />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = async (
  ctx: DocumentContext,
): Promise<NoncedDocument> => {
  const initialProps = await Document.getInitialProps(ctx);
  const nonce = (ctx.req?.headers["x-csp-nonce"] as string) ?? "";

  return { ...initialProps, nonce: nonce };
};

export default CustomDocument;
