import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function Header() {
  // Function to handle WhatsApp chat
  const handleWhatsAppChat = () => {
    window.open("https://wa.me/256789555054", "_blank");
  };

  // Function to handle phone call
  const handlePhoneCall = () => {
    window.location.href = "tel:+256789555054";
  };

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll(".scroll-link");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").slice(1);
        scrollToSection(targetId);
      });
    });
  }, []);

  return (
    <div className=" bg-white h-20 w-full mx-auto px-8 flex items-center justify-between sticky top-0 z-30 ">
      {/* <Image src="/images/logo.png" width={100} height={100} /> */}
      <h2 className="text-black font-bold text-4xl">Personal Portifolio</h2>
      <div className="flex">
        <Link
          href="#home"
          className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
        >
          Home
        </Link>
        <Link
          href="#about"
          className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
        >
          About
        </Link>
        <Link
          href="#portifolio"
          className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
        >
          Portfolio
        </Link>
        <Link
          href="#skills"
          className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className=" text-black hover:text-black hover:border-yellow-500 border-b-3 border-transparent transition-all duration-300 ease-in-out mr-4"
        >
          ContactMe
        </Link>
      </div>

      <button
        className=" bg-white text-black flex items-center justify-center py-2 px-4 rounded-full border border-black gap-3"
        onClick={() => {
          handleWhatsAppChat();
          handlePhoneCall();
        }}
      >
        <MessageCircle size={24} className="text-green-600" />
        Contact Me
      </button>
    </div>
  );
}

export default Header;
