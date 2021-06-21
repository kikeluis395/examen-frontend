import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { PATH_IMG } from "../../lib/paths";
import Image from "next/image";

const Footer = ({ social_networks, information, hero }) => {
  return (
    <>
      <footer className="bg-black py-8">
        <div className="w-10/12 m-auto text-white flex justify-between items-center flex-col md:flex-row">
          <div className="flex justify-center flex-col items-center">
            <Image
              src={`${PATH_IMG}${hero.logo}`}
              width={100}
              height={100}
              alt={hero.excerpt}
            />
            <p className="mt-4">{hero.title}</p>
          </div>
          <div className="flex justify-start items-start flex-col md:flex-row">
            <div className="flex justify-center  flex-col m-5">
              <p className="text-2xl">Redes Sociales</p>
              {social_networks.map((icon) => (
                <div key={icon.id} className="my-1">
                  <a className="text-lg" href={icon.url}>
                    <FontAwesomeIcon
                      icon={
                        icon.master_social_networks.name === "Facebook"
                          ? faFacebook
                          : icon.master_social_networks.name === "LinkedIn"
                          ? faLinkedin
                          : icon.master_social_networks.name === "Youtube"
                          ? faYoutube
                          : faInstagram
                      }
                      className="mr-4"
                    />
                    {icon.master_social_networks.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="m-5">
              <p className="text-2xl">Contacto</p>
              <p className="text-lg my-1">{information.district}</p>
              <p className="text-lg my-1">{information.address_line_1}</p>
              <p className="text-lg my-1">{information.phone}</p>
              <p className="text-lg my-1">{information.cellphone}</p>
              <p className="text-lg my-1">{information.email}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
