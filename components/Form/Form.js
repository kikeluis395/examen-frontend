import React, { useState } from "react";
import Error from "../Error/Error";
import { toast, ToastContainer } from "react-nextjs-toast";
import { Header } from "../";

const Form = ({ hero, seo, main }) => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    accepted: true,
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { full_name, email, phone, company, message } = form;

    if (
      full_name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      company.trim() === "" ||
      message.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    let config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "xsrf-token": "",
      },
      mode: "no-cors",
      body: JSON.stringify(form),
    };

    let response = await fetch("http://test.playgroup.pe/api/lead/save", config)
      .then((response) => {
        toast.notify("Datos enviados correctamente!", {
          duration: 4,
          type: "success",
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        toast.notify("No se enviaron los datos!", {
          duration: 4,
          type: "warning",
        });
      });

    setForm({
      full_name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <>
      <ToastContainer align={"rigth"} />
      <div className=" font-sans login bg-cover bg-gradient-to-r from-secondary to-primary ">
        <Header main={main} />
        <div className="w-12/12 md:w-11/12 lg:10/12 mx-auto h-full flex flex-col md:flex-row justify-center items-center pt-20 sm:flex">
          <section className="py-10 w-full md:w-4/12 lg:w-7/12">
            <article className="flex-col justify-center inline-flex self-stretch  p-6">
              <h2 className="uppercase font-semibold text-xl">{hero.title}</h2>
              <strong className="text-lg pb-2 font-normal font-sans sm:text-2xl"></strong>
              <p className="text-sm pb-4">{seo.seo_description}</p>
              <button className="font-semibold uppercase border p-3 max-w-max hover:bg-primary hover:text-white">
                Registrate
              </button>
            </article>
          </section>
          <form
            className="w-11/12 md:w-6/12 lg:w-5/12 m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl leading-loose"
            onSubmit={handleSubmit}
          >
            <p className="text-white font-medium text-center text-2xl mb-4 ">
              Contáctanos
            </p>
            {error ? <Error /> : null}
            <div className="">
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Nombre completo"
                aria-label="Nombres"
                onChange={handleChange}
                value={form.full_name}
              />
            </div>
            <div className="mt-2">
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                aria-label="email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div className="mt-2">
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="number"
                id="phone"
                name="phone"
                placeholder="Teléfono"
                aria-label="Telefono"
                onChange={handleChange}
                value={form.phone}
              />
            </div>
            <div className="mt-2">
              <input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="text"
                id="company"
                name="company"
                placeholder="Compañia"
                aria-label="Compañia"
                onChange={handleChange}
                value={form.company}
              />
            </div>
            <div className="mt-2">
              <textarea
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="text"
                id="message"
                name="message"
                placeholder="Dejanos un mensaje!"
                aria-label="Mensaje"
                onChange={handleChange}
                value={form.message}
              ></textarea>
            </div>
            <div className="mt-4 items-center flex justify-end">
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-primary hover:bg-secondary hover:text-black rounded"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
