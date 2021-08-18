import React, { useState } from "react";
import Categories from "../Assests/Categories";
import items from "../Assests/data/dataProjects";
import ProjectDetails from "../Assests/ProjectDetails";
import ParticleBubble from "../Assests/animation/ParticleBubble";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Projects() {
  const [projectItems, setProjectItems] = useState(items);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setProjectItems(newItems);
  };
  return (
    <>
      <ParticleBubble />
      <main className="projects">
        <section className="menu section">
          <div className="title">
            <h2>My Projects</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <ProjectDetails items={projectItems} />
        </section>
      </main>
    </>
  );
}
