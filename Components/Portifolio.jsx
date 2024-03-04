import React from "react";

function Portifolio() {
  const projects = [
    {
      image: "/images/image3.jpg",
      github: "https://github.com/example1",
      live: "https://example1.com",
    },
    {
      image: "/images/image3.jpg",
      github: "https://github.com/example2",
      live: "https://example2.com",
    },
    {
      image: "/images/image3.jpg",
      github: "https://github.com/example2",
      live: "https://example2.com",
    },
    {
      image: "/images/image3.jpg",
      github: "https://github.com/example2",
      live: "https://example2.com",
    },
    {
      image: "/images/image3.jpg",
      github: "https://github.com/example2",
      live: "https://example2.com",
    },
    {
      image: "/images/image3.jpg",
      github: "https://github.com/example2",
      live: "https://example2.com",
    },
    {
      image: "/images/image3.jpg",
      github: "https://github.com/example2",
      live: "https://example2.com",
    },
    {
      image: "/images/image3.jpg",
      github: "https://github.com/example2",
      live: "https://example2.com",
    },
  ];

  return (
    <div
      id="portifolio"
      className=" min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h2 className="my-4 text-3xl">My Portfolio</h2>
      <span className=" text-sm font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo
        impedit sed?
      </span>
      <div className=" flex justify-center w-full max-w-screen-lg flex-wrap">
        {/* Mapping over the projects array */}
        {projects.map((project, index) => (
          <div key={index} className="bg-white">
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="object-cover h-80 m-2"
            />
            <div className="flex mr-2 gap-3">
              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                GitHub
              </a>
              {/* Live View Button */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Live View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portifolio;
