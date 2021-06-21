import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PATH_IMG_STORIES } from "../../lib/paths";

const Proyects = ({ proyects }) => {
  const [item, setItem] = useState([]);
  const [limit, setLimit] = useState(3);

  const itemFilter = (value) => {
    const initialItems = proyects.filter((e) => e.index <= value);
    setItem(initialItems);
  };
  const MoreItems = (value) => {
    if (limit < proyects.length) {
      setLimit(value);
    } else {
      setLimit(9);
    }
    itemFilter(value);
    console.log(limit);
  };
  useEffect(() => {
    itemFilter(3);
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-primary font-bold text-4xl text-center">
        Casos de éxito
      </h2>
      <div className="container w-10/12 mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {item.map((proyect) => (
          <div className="group relative rounded-lg" key={proyect.id}>
            <div className="">
              <Image
                className="h-full w-full object-cover object-center  rounded-lg group-hover:opacity-50"
                src={`${PATH_IMG_STORIES}${proyect.image}`}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <div className="absolute w-full h-full opacity-0 grid items-center justify-center top-0 left-0 group-hover:opacity-100 ">
              <Image
                className="max-w-xs w-full"
                src={`${PATH_IMG_STORIES}${proyect.logo}`}
                alt=""
                width={200}
                height={200}
                objectPosition="center"
              />
            </div>
            <div className="">
              <div className="py-4 px-8">
                <h3 className="text-2xl font-bold">{proyect.title}</h3>
                <p className="leading-7">{proyect.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-10/12 m-auto mb-20 mt-5">
        {limit < proyects.length ? (
          <button
            onClick={() => MoreItems(limit + 3)}
            className="px-4 py-1 text-white font-light tracking-wider bg-primary hover:bg-secondary hover:text-black rounded"
          >
            Mostrar mas
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Proyects;
