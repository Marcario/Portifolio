import React from "react";

// Import images for each category

const Skills = () => {
  // Array of skills data
  const skillsData = [
    {
      category: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      image: "/images/UI.jpeg",
    },
    {
      category: "Backend Development",
      skills: ["Python", "Django"],
      image: "/images/UI.jpeg",
    },
    {
      category: "Database",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      image: "/images/UI.jpeg",
    },
    {
      category: "Other Skills",
      skills: ["Git", "RESTful APIs", "Graphic"],
      image: "/images/UI.jpeg",
    },
  ];

  return (
    <div id="skills" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.category}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl text-black font-semibold mb-4">
                {category.category}
              </h2>
              <ul className="list-disc text-black list-inside">
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
