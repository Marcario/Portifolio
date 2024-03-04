import Header from "@/components/header";
import Projects from "./projects/page";
import More from "./more/page";
import Portifolio from "./portifolio/page";
import { Github, Instagram, Linkedin } from "lucide-react";
import Button from "@/components/button";
import ContactPage from "./contact/page";
import About from "./About/page";
import Skills from "./skills/page";

export default function HomePage() {
  return (
    <div className="body">
      <div className="br">
        <h1>Personal Portifolio</h1>
        <Header />
      </div>
      <div className="container">
        <div className="details">
          <h1 className="subtitle">Hello</h1>
          <br />
          <h1 className="title">
            I'm{" "}
            <span>
              {" "}
              Christine Nalubwama <br />a
            </span>{" "}
            Software Developer
          </h1>

          <p class="description">
            Hello there! I'm Christine, a passionate software developer with
            expertise in React, Flutter, Python, and Java. I specialize in
            crafting impactful solutions that combine creativity with technical
            excellence.
          </p>
          <div class="social-media">
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
          <Button />
        </div>

        <img className="img" src="/images/image3.jpg" alt="Portifolio image" />
      </div>

      <Portifolio />

      <About />
      <Skills />
      <ContactPage />
    </div>
  );
}
