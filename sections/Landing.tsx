import CallToActionSocial from "@/components/CallToActionSocial";
import Image from "next/image";
import { siGitextensions, siLinkedin } from "simple-icons";

export default function Landing() {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <Image
            width={720}
            height={400}
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center max-w-[70ch]">
          <h1
            id="landing"
            className="mb-4 text-3xl font-bold text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-indigo-600 via-red-400 to-indigo-900 "
          >
            Frontend Developer
          </h1>
          <p className="mb-2 leading-relaxed text-light-darker ">
            Hola 👋, soy <b>Julian Kominovic</b>, desarrollador frontend.
          </p>

          <p className="w-full mb-8 text-light-darker ">
            Mi función es{" "}
            <b>crear, mantener y modificar interfaces de usuario</b>. Mi campo
            principal es el desarrollo web pero también he trabajado en diversas
            aplicaciones de escritorio.
          </p>
          <div className="flex flex-wrap gap-4 lg:flex-row md:flex-col ">
            <CallToActionSocial
              svgPath={siLinkedin.path}
              link="https://www.linkedin.com/in/jkominovic/"
              subtitle="Agregame en"
              title="Linkedin"
            />
            <CallToActionSocial
              svgPath={siGitextensions.path}
              link="https://bento.me/juliankominovic"
              subtitle="Visita mi"
              title="Bento"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
