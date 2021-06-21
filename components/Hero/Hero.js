import React from "react";
import Image from "next/image";
import { PATH_IMG } from "../../lib/paths";

const Hero = ({ hero, seo }) => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary">
      <section className="py-10 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-12">
        <article className="flex-col justify-center inline-flex self-stretch  p-6">
          <h2 className="uppercase font-semibold text-xl">{hero.title}</h2>
          <strong className="text-lg pb-2 font-normal font-sans sm:text-2xl">
            
          </strong>
          <p className="text-sm pb-4">
            {seo.seo_description}
          </p>
          <button className="font-semibold uppercase border p-3 max-w-max hover:bg-gray-600 hover:text-white">
            Join us
          </button>
        </article>
        <figure>
          <Image
            src={`${PATH_IMG}${hero.image_menu}`}
            alt="Banner"
            width={500}
            height={500}
          />
        </figure>
      </section>
    </div>
  );
};

export default Hero;
