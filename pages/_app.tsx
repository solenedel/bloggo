import '../styles/globals.css';
import Layout from '../components/layout';
// Supports weights 200-800
import '@fontsource-variable/dosis';

import type { AppProps } from 'next/app';
// import '@fontsource/fredoka-one';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {' '}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
