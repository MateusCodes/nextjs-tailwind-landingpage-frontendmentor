import '../styles/globals.css';

import React from 'react'
import { Layout } from '../components/index';
import Head from 'next/head';
import Aos from 'aos';
import 'aos/dist/aos.css';


function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    Aos.init({ duration: 2000, once: true, easing: 'ease' });
  }, []);

  return (
    <>
      <Head>
        <title>Mateus Codes® - Landing Page Frontend Mentor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Landing page desenvolvida de modo a promover meu trabalho de freelancer. Mostrar que tenho conhecimentos de SEO, criatividade e capacidade. Bem-vindo."
        />
        <link
          rel="shortcut icon"
          href="../public/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
