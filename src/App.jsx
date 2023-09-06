import profile from "./assets/profile.jpeg";
import { HiArrowLongRight, HiMiniMoon, HiMiniLightBulb } from "react-icons/hi2";
import resume from "./assets/resume.pdf";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
const theme = atom(false);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useAtom(theme);

  useEffect(() => {
    // Check if the user's preferred color scheme is dark
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // Set the initial state based on the user's preferred color scheme
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes in the user's preferred color scheme
    const darkModeChangeListener = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addListener(darkModeChangeListener);

    // Clean up the listener when the component unmounts
    return () => {
      darkModeMediaQuery.removeListener(darkModeChangeListener);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Your existing toggleTheme function code here
  };

  return (
    <div
      className={`${isDarkMode ? "bg-[#121212] text-[#cccccc]" : "bg-white"}`}
    >
      <main className={layout} id="home">
        {/* THEME CONTROL [START] */}
        <button
          onClick={toggleTheme}
          className={`${
            isDarkMode ? "text-white bg-[#cccccc]" : "text-black bg-gray-100"
          } py-0.5 px-0.5 rounded-full w-14 absolute top-20 right-4 md:right-6 lg:right-8`}
        >
          {isDarkMode ? (
            <div className="bg-black rounded-full w-fit text-white p-1">
              {" "}
              <HiMiniMoon />
            </div>
          ) : (
            <div className="bg-yellow-500 rounded-full w-fit text-black p-1 ml-auto">
              {" "}
              <HiMiniLightBulb />
            </div>
          )}
        </button>
        {/* THEME CONTROL [END] */}
        {/* PROFILE [START] */}
        <img
          src={profile}
          alt="ang pogi ko"
          className={`${isDarkMode ? "grayscale" : ""} ${imgStyles}`}
        />
        <h1 className={h1}>
          Hey, I’m Joe. I'm a freelance front-end developer based in Cavite,
          Philippines.
        </h1>
        <p className={pStyles}>
          {" "}
          By understanding your business's unique needs, I create websites that
          convey your story, values, and offerings effectively. Let's
          collaborate to build a solid foundation that propels your startup to
          new heights.
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
        <div
          className={`rounded-xl p-4 flex flex-col space-y-4 ${
            isDarkMode
              ? "bg-[#1e1e1e] text-[#cccccc]"
              : "bg-gray-100 text-black"
          }`}
        >
          <div className="flex flex-1 justify-between">
            <h2 className={h3}>Arte Amor</h2>
            <p className={pStyles}>2022</p>
          </div>
          <p className={pStyles}>
            Arte|Amor Jewelry Store are perfect for your innovation as well as
            for your fashion. We provide you the best quality products for your
            convenience.
          </p>

          <a
            href="https://arteamores.com/"
            target="_blank"
            className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
          >
            <p className={pStyles}>arteamores.com</p> <HiArrowLongRight />
          </a>
        </div>

        <div
          className={`rounded-xl p-4 flex flex-col space-y-4 ${
            isDarkMode
              ? "bg-[#1e1e1e] text-[#cccccc]"
              : "bg-gray-100 text-black"
          }`}
        >
          <div className="flex flex-1 justify-between">
            <h2 className={h3}>Tarot ni Alma</h2>
            <p className={pStyles}>2023</p>
          </div>
          <p className={pStyles}>
            A passion project designed for people who is interested in tarot
            card and astrology.
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

        <div
          className={`rounded-xl p-4 flex flex-col space-y-4 ${
            isDarkMode
              ? "bg-[#1e1e1e] text-[#cccccc]"
              : "bg-gray-100 text-black"
          }`}
        >
          <div className="flex flex-1 justify-between">
            <h2 className={h3}>Whoopscommerce</h2>
            <p className={pStyles}>2023</p>
          </div>
          <p className={pStyles}>
            Welcome to Whoopscommerce, your premium destination for online
            shopping redefined. Immerse yourself in a world where style,
            convenience, and sophistication converge. Explore our curated
            collection of products that blend quality craftsmanship with modern
            flair, and enjoy a seamless shopping journey that brings the joy
            back to every click.
          </p>

          <a
            href="https://whoopscommerce.netlify.app/"
            target="_blank"
            className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
          >
            <p className={pStyles}>whoopscommerce.netlify.app</p>{" "}
            <HiArrowLongRight />
          </a>
        </div>
        {/* PROJECT [END] */}

        <div className="border-b-2" />

        {/* FOOTER [START]*/}
        <footer className={footerStyles}>
          <p>
            2023 -{" "}
            <a
              href="https://www.linkedin.com/in/softwareengineerjoe/"
              target="_blank"
            >
              Mc-Jo Maranan
            </a>{" "}
          </p>
          <div className="flex flex-row gap-2">
            <a className="hover:opacity-80" href="#home">
              home
            </a>
            /
            <a className="hover:opacity-80" href="#projects">
              projects
            </a>
            /
            <a className="hover:opacity-80" href={resume} download>
              resume
            </a>
          </div>
        </footer>
        {/* FOOTER [END]*/}
      </main>
    </div>
  );
}

const layout =
  "max-w-4xl w-full mx-auto flex py-12 space-y-8 flex-col px-4 md:px-6 lg:px-8 relative";
const imgStyles = "object-cover rounded-full w-36 h-auto";
const h1 = "font-bold text-4xl";
const h2 = "font-bold text-3xl";
const h3 = "font-bold text-2xl";
const pStyles = "tracking-widest leading-relaxed";
// const cardStyles = "rounded-xl bg-gray-100 p-4 flex flex-col space-y-4";
const footerStyles = "flex flex-1 justify-between text-thin text-sm";
