import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sakthiveldesigner.vercel.app/" />
      <meta property="og:site_name" content="Sakthivel S | Mechanical Design Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    </Head>
  );
}
