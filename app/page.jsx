"use client";
import AboutMe from "@/Components/AboutMe";
import Contact from "@/Components/Contact";
import Projects from "@/Components/Portifolio";
import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import Portfolio from "@/Components/Skills";

function Home() {
  const handleButtonClick = () => {
    const link = document.createElement("a");
    link.href = "/images/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className=" bg-black text-white">
      <div className="relative mt-28">
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl flex flex-col">
                <span className="text-6xl">Hello</span>
                <span>
                  I'm{" "}
                  <span className="text-yellow-400">Christine Nalubwama</span>,
                </span>
              </h2>
              <div>
                <h2
                  id="glitter-text"
                  className="font-bold text-4xl mt-1 cursor-pointer"
                >
                  frontend developer
                </h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  Welcome! I'm Christine, a dedicated software developer
                  specializing in React, <br /> Flutter, Python, and Java. I'm
                  passionate about creating impactful solutions that <br />
                  harmonize creativity and technical ingenuity. With a keen eye
                  for detail
                  <br />
                  and a commitment to excellence, I excel in delivering bespoke
                  <br />
                  software experiences that elevate user engagement. Explore my
                  <br />
                  portfolio to witness how I blend innovation with precision to
                  <br />
                  craft compelling digital solutions.
                </p>
                <div className="flex gap-4 w-5">
                  <a href="">
                    <Github />
                  </a>
                  <a href="">
                    <Linkedin />
                  </a>
                  <a href="">
                    <Instagram />
                  </a>
                </div>
                <button
                  className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                  onClick={handleButtonClick}
                >
                  Download resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="img">
                <img
                  src="/images/image3.jpg"
                  alt="Portfolio image"
                  className="rounded-full"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <AboutMe />
      <Projects />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Home;
