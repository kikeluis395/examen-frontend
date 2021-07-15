import {Footer, Proyects, Form, Metatags} from '../components';


export default function Home({ social_networks, information, proyects, main, seo, hero }) {

  return (
    <>
      <Metatags seo={seo}/>
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