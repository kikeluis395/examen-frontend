import Head from 'next/Head';
import { PATH_IMG } from '../../lib/paths';

const Metatags = ({seo}) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.seo_description}/>
      <meta name="keywords" content={seo.seo_keywords}/>
      <meta property="og:image" content={`${PATH_IMG}${seo.seo_image}`}/>
      <meta property="og:description" content={seo.seo_description}/>
      <meta property="og:site_name" content={seo.title}/>
    </Head>
  )
}

export default Metatags
