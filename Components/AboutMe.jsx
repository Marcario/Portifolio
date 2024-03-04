import React from "react";

const skillsData = [
  {
    id: 1,
    title: "UI/Design",
    description: "This is a demo, create more content",
    imageSrc: "/images/UI.jpeg",
    altText: "UI/Design",
  },
  {
    id: 2,
    title: "Web Development",
    description: "This is a demo, create more content",
    imageSrc: "/images/web.jpeg",
    altText: "Web Development",
  },
  {
    id: 3,
    title: "App Development",
    description: "This is a demo, create more content",
    imageSrc: "/images/app.jpeg",
    altText: "App Development",
  },
];

function AboutMe() {
  return (
    <div
      id="about"
      className=" overflow-hidden w-full  flex flex-col items-center justify-center text-center mx-auto"
    >
      <span className=" text-white text-3xl font-semibold pt-12 mb-6">
        What I do
      </span>
      <span className=" text-white text-base font-normal max-w-2xl px-2">
        I am a skilled and Passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am Proficient in
        HTML, CSS, Javascript and React as well as design software such as Adobe
        Photoshop and Illustrator
      </span>
      <div className=" mx-6 w-full max-w-[800px]">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className=" flex items-center bg-gray-800 text-white my-6 py-4 px-6 rounded"
          >
            <img
              className=" object-cover h-40 w-40 mr-8"
              src={skill.imageSrc}
              alt={skill.altText}
            ></img>
            <div className="">
              <h2 className="text-lg font-semibold mb-2">{skill.title}</h2>
              <p className="text-base">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
