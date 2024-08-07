const theme = atom(false);

import profile from "./assets/profile.jpeg";
import {
  HiArrowLongRight,
  HiMiniMoon,
  HiMiniLightBulb,
  HiArrowLeft,
  HiArrowRight,
} from "react-icons/hi2";
import resume from "./assets/resume.pdf";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import tcs1 from "./assets/images/tcs1.jpg";
import tcs2 from "./assets/images/tcs2.jpg";
import lft from "./assets/images/lft.jpg";
import gcash from "./assets/images/gcash.jpg";
import aws1 from "./assets/certifications/cert_aws1.png";
import aws2 from "./assets/certifications/cert_aws2.png";
import backend from "./assets/certifications/cert_backend.png";
import frontend from "./assets/certifications/cert_frontend.png";
import fullstack from "./assets/certifications/cert_fullstack.png";
import responsive from "./assets/certifications/cert_responsive_design.png";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useAtom(theme);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [tcs1, tcs2, gcash, lft];
  const certificates = [aws1, aws2, backend, frontend, fullstack, responsive];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    setIsDarkMode(darkModeMediaQuery.matches);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const controls = useAnimation();

  const startMarquee = async () => {
    while (true) {
      await controls.start({
        x: -2200,
        transition: { duration: 20, ease: "linear" },
      });
      await controls.start({ x: 0, transition: { duration: 0 } });
    }
  };

  useEffect(() => {
    startMarquee();
  }, []);
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
        <p className={`${pStyles} prose`}>
          {" "}
          {/* By understanding your business's unique needs, I create websites that
          convey your story, values, and offerings effectively. Let's
          collaborate to build a solid foundation that propels your startup to
          new heights. */}
          As a driven undergraduate in BS Agrientrepreneurship, I embarked on a
          dynamic journey amid the challenges of the COVID era. Transitioning
          from academia to the professional sphere, I embraced a role as an
          Account and Fraud Specialist with PayPal, where I honed invaluable
          skills in customer service over a rewarding 7-month tenure. It was
          during this time that I found myself drawn to the realm of freelancing
          and the burgeoning tech industry.
          <div className="p-4" />
          Fuelled by curiosity and ambition, I delved into the realm of web
          development, concentrating my efforts on frontend expertise. Within a
          mere two months of dedicated study, I secured my inaugural position
          with Pisopay, where I continued to expand my skill set and refine my
          craft for a further 6 months. Presently, I thrive in my role as a
          Customer Champion Consultant with One New Zealand, seamlessly
          integrating my passion for customer service with my growing
          proficiency in the tech domain.
          <div className="p-4" />
          Alongside my professional endeavors, I engage in freelance development
          projects. With an unwavering commitment to personal and professional
          growth, I eagerly embrace each opportunity to expand my knowledge and
          expertise across diverse industries. Let's connect and explore
          synergies in our respective journeys!
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
        {/* <div
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
        </div> */}

        <div
          className={`rounded-xl p-4 flex flex-col space-y-4 ${
            isDarkMode
              ? "bg-[#1e1e1e] text-[#cccccc]"
              : "bg-gray-100 text-black"
          }`}
        >
          <div className="flex flex-1 justify-between">
            <h2 className={h3}>Kurtis Classroom</h2>
            <p className={pStyles}>2023</p>
          </div>
          <p className={pStyles}>
            Kurtis Classroom is an innovative AI-powered web application
            designed to revolutionize the way students learn by infusing the
            power of gamification into their educational journey. With Kurtis
            Classroom, learning becomes not just engaging but also incredibly
            fun.
          </p>

          <a
            href="https://landing-page-digiteer-maranan.netlify.app/"
            target="_blank"
            className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
          >
            <p className={pStyles}>visit website</p> <HiArrowLongRight />
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
            <p className={pStyles}>visit website</p> <HiArrowLongRight />
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
            <p className={pStyles}>visit website</p> <HiArrowLongRight />
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
            <h2 className={h3}>Roni AI</h2>
            <p className={pStyles}>2023</p>
          </div>
          <p className={pStyles}>
            Meet Roni AI — your AI finance assistant that will analyze your
            business. Gain a deeper understanding of your finances and make
            informed decisions in a snap!
          </p>

          <a
            href="https://www.roni.ai/"
            target="_blank"
            className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
          >
            <p className={pStyles}>visit website</p> <HiArrowLongRight />
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
            <h2 className={h3}>Rumine Labs</h2>
            <p className={pStyles}>2023</p>
          </div>
          <p className={pStyles}>
            Rumine Labs is a multicultural startup team based in Singapore,
            India, Taiwan, and the Philippines, dedicated to developing
            NorthStar, a cutting-edge journal productivity app driven by AI.
            NorthStar empowers users worldwide to manage their lives more
            efficiently, offering intelligent insights and actionable advice.
            Join us as we revolutionize personal productivity and help users
            take control of their journey with NorthStar.
          </p>

          <a
            href="https://ruminelabs.com/"
            target="_blank"
            className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
          >
            <p className={pStyles}>visit website</p> <HiArrowLongRight />
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
            <h2 className={h3}>Gradmission</h2>
            <p className={pStyles}>2024</p>
          </div>
          <p className={pStyles}>
            Introducing Gradmission: a platform where graduate students, whether
            pursuing a master's or PhD, share their expertise through
            personalized statements, helping aspiring learners globally achieve
            academic success. Access invaluable insights and guidance tailored
            to your educational journey today.
          </p>

          <a
            // href="https://gradmission.com/"
            href="https://gradmission.vercel.app/"
            target="_blank"
            className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
          >
            <p className={pStyles}>visit website</p> <HiArrowLongRight />
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
            <h2 className={h3}>Therapy Analytics</h2>
            <p className={pStyles}>2024</p>
          </div>
          <p className={pStyles}>
            Therapy Analytics is a versatile app designed to efficiently track
            therapy sessions for children dealing with a wide range of concerns.
            From anxiety to behavioral issues and developmental challenges,
            therapists can use its comprehensive tools to monitor progress,
            document insights, and customize treatment plans for each child's
            unique needs, promoting effective and informed therapy outcomes.
          </p>

          <a
            href="https://www.therapyanalytics.co/"
            target="_blank"
            className="flex flex-row gap-2 items-center w-fit hover:opacity-80"
          >
            <p className={pStyles}>visit website</p> <HiArrowLongRight />
          </a>
        </div>
        {/* PROJECT [END] */}

        {/* GALLERY [START] */}

        <div className="border-b-2" />

        <div id="gallery" className="flex flex-1 justify-between">
          <h2 className={h2}>Gallery</h2>
        </div>

        <div
          className={`flex flex-row rounded-xl justify-between ${
            isDarkMode ? "bg-[#1e1e1e]" : "bg-gray-100"
          }`}
        >
          <button
            className="hover:opacity-80 mx-4 md:mx-6 lg:mx-8 h-fit my-auto"
            onClick={prevImage}
          >
            <HiArrowLeft style={{ fontSize: "1rem" }} className="md:hidden" />
            <HiArrowLeft
              style={{ fontSize: "2rem" }}
              className="hidden md:block lg:hidden"
            />
            <HiArrowLeft
              style={{ fontSize: "2.5rem" }}
              className="hidden lg:block"
            />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className={`${
              isDarkMode ? "grayscale" : ""
            } object-cover w-auto h-40 md:h-64 lg:h-80`}
          />
          <button
            className="hover:opacity-80 mx-4 md:mx-6 lg:mx-8 h-fit my-auto"
            onClick={nextImage}
          >
            <HiArrowRight style={{ fontSize: "1rem" }} className="md:hidden" />
            <HiArrowRight
              style={{ fontSize: "2rem" }}
              className="hidden md:block lg:hidden"
            />
            <HiArrowRight
              style={{ fontSize: "2.5rem" }}
              className="hidden lg:block"
            />
          </button>
        </div>
        {/* GALLERY [END] */}

        {/* CERTIFICATIONS [END] */}

        <div className="border-b-2" />

        <div id="certifications" className="flex flex-1 justify-between">
          <h2 className={h2}>Certifications</h2>
        </div>

        <div className="w-full overflow-hidden">
          <motion.div
            className="flex flex-row whitespace-nowrap items-center justify-between gap-16"
            animate={controls}
          >
            {certificates.map((certificate, index) => (
              <img
                key={index}
                src={certificate}
                alt={`Certificate ${index}`}
                className={`${
                  isDarkMode ? "grayscale" : ""
                } h-56 md:h-80 w-auto`}
              />
            ))}
          </motion.div>
        </div>

        {/* CERTIFICATIONS [START] */}

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
