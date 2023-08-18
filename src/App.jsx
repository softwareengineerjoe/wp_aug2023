import profile from "./assets/profile.jpeg";
import { HiArrowLongRight } from "react-icons/hi2";
import resume from "./assets/resume.pdf"

export default function App() {
  return (
    <main className={layout} id="home">
      {/* PROFILE [START] */}
      <img src={profile} alt="ang pogi ko" className={imgStyles} />
      <h1 className={h1}>
        Hey, I’m Joe. I'm a freelance front-end developer based in Cavite,
        Philippines.
      </h1>
      <p className={pStyles}>
        {" "}
        By understanding your business's unique needs, I create websites that
        convey your story, values, and offerings effectively. Let's collaborate
        to build a solid foundation that propels your startup to new heights.
      </p>
      <a
        href="https://www.linkedin.com/in/softwareengineerjoe/"
        target="_blank"
        className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
      >
        <p className={pStyles}>Get in touch</p> <HiArrowLongRight />
      </a>
      {/* PROFILE [END] */}
      <div className="border-b-2" />
      {/* PROJECT [START] */}
      <div id="projects" className="flex flex-1 justify-between">
        <h2 className={h2}>Projects</h2>

        {/* <p className={pStyles}>See all</p> */}
      </div>
      <div className={cardStyles}>
        <div className="flex flex-1 justify-between">
          <h2 className={h3}>Arte Amor</h2>
          <p className={pStyles}>2022</p>
        </div>
        <p className={pStyles}>
          An ecommerce dropshipping web application powered by Shopify that
          sells jewelry products.
        </p>

        <a
          href="https://arteamores.com/"
          target="_blank"
          className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
        >
          <p className={pStyles}>arteamores.com</p> <HiArrowLongRight />
        </a>
      </div>
      <div className={cardStyles}>
        <div className="flex flex-1 justify-between">
          <h2 className={h3}>Tarot ni Alma</h2>
          <p className={pStyles}>2023</p>
        </div>
        <p className={pStyles}>
          A passion project designed for people who is interested in tarot card
          and astrology.
        </p>

        <a
          href="https://tarot-ni-alma.netlify.app/"
          target="_blank"
          className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
        >
          <p className={pStyles}>tarot-ni-alma.netlify.app</p>{" "}
          <HiArrowLongRight />
        </a>
      </div>
      {/* PROJECT [END] */}

      <div className="border-b-2" />

      {/* FOOTER [START]*/}
      <footer className={footerStyles}>
        <p>2023 - Mc-Jo Maranan</p>
        <div className="flex flex-row gap-2">
          <a className="hover:opacity-80" href="#home">home</a>/<a className="hover:opacity-80" href="#projects">projects</a>/
          <a className="hover:opacity-80" href={resume} download>resume</a>
        </div>
      </footer>
      {/* FOOTER [END]*/}
    </main>
  );
}

const layout =
  "max-w-3xl w-full mx-auto flex py-12 space-y-8 flex-col px-4 md:px-6 lg:px-8";
const imgStyles = "object-cover rounded-full w-36 h-auto grayscale";
const h1 = "font-bold text-4xl";
const h2 = "font-bold text-3xl";
const h3 = "font-bold text-2xl";
const pStyles = "tracking-widest leading-relaxed";
const cardStyles = "rounded-xl bg-gray-100 p-4 flex flex-col space-y-4";
const footerStyles = "flex flex-1 justify-between text-thin text-sm";