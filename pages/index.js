import {Footer, Proyects, Form} from '../components';
import Head from 'next/head';

export default function Home({ social_networks, information, proyects, main, seo, hero }) {

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.seo_description}/>
        <meta name="keywords" content={seo.seo_keywords}/>
        <meta property="og:image" content={`${PATH_IMG}${seo.seo_image}`}/>
        <meta property="og:description" content={seo.seo_description}/>
        <meta property="og:site_name" content={seo.title}/>
      </Head>
      <main>
        <Form hero={hero} seo={seo} main={main}/>
        <Proyects proyects={proyects}/>
      </main>
      <Footer social_networks={social_networks} information={information} hero={hero}/>
    </>
  )
};

export const getStaticProps = async () => {
  const resFooter = await fetch("http://test.playgroup.pe/api/layout")
  const Footer = await resFooter.json();
  const { main } = Footer.data.menu
  const { social_networks, information } = Footer.data.footer;
  
  const resProyects = await fetch("https://test.playgroup.pe/api/page/department/software-factory")
  const ProyectsResult = await resProyects.json();
  const proyects = ProyectsResult.data.success_stories.data;
  const seo = ProyectsResult.data.page;
  const hero = ProyectsResult.data.department;

  return {
    props: {
      social_networks,
      information,
      proyects,
      main,
      seo,
      hero
    },
  };
};