"use client";

import React from "react";

import { LucideIcon, Project } from "@/components/ui";
import projects from "@/data/projects.json";

import styles from "./project-gallery.module.css";

const ProjectGallery = () => {
  const [displayProjects, setDisplayProjects] = React.useState(4);
  const [filterType, setFilterType] = React.useState("all");
  const [filterTech, setFilterTech] = React.useState("all");
  const [data] = React.useState(projects);

  const loadMore = () => {
    setDisplayProjects(displayProjects + 4);
  };

  const handleTypeChange = (language: string) => {
    setFilterType(language);
    setDisplayProjects(4);
  };

  const handleTechChange = (tag: string) => {
    setFilterTech(tag);
    setDisplayProjects(4);
  };

  const filteredData = data
    .filter((content) => filterType === "all" || content.type === filterType)
    .filter((content) => filterTech === "all" || content.tech === filterTech);

  return (
    <div className={styles.gallery}>
      <div className={styles.filters}>
        <h2>
          <LucideIcon name="Filter" size={16} />
          Filters:
        </h2>
        <div className={styles.type}>
          <strong>Type:</strong>
          <button
            className={filterType === "all" ? styles.enabled : styles.disabled}
            onClick={() => handleTypeChange("all")}
          >
            All
          </button>
          <button
            className={
              filterType === "Website" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTypeChange("Website")}
          >
            Website
          </button>
          <button
            className={
              filterType === "WebApp" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTypeChange("WebApp")}
          >
            WebApp
          </button>
          <button
            className={
              filterType === "Chatbot" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTypeChange("Chatbot")}
          >
            Chatbot
          </button>
          <button
            className={filterType === "Game" ? styles.enabled : styles.disabled}
            onClick={() => handleTypeChange("Game")}
          >
            Game
          </button>
        </div>
        <div className={styles.tech}>
          <strong>Technologies:</strong>
          <button
            className={filterTech === "all" ? styles.enabled : styles.disabled}
            onClick={() => handleTechChange("all")}
          >
            All
          </button>
          <button
            className={
              filterTech === "next.js" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTechChange("next.js")}
          >
            Next.js
          </button>
          <button
            className={
              filterTech === "python" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTechChange("python")}
          >
            Python
          </button>
          <button
            className={
              filterTech === "godot" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTechChange("godot")}
          >
            Godot
          </button>
          <button
            className={
              filterTech === "unity" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTechChange("unity")}
          >
            Unity
          </button>
        </div>
      </div>
      <div className={styles.grid}>
        {filteredData.length > 0 ? (
          filteredData
            .slice(0, displayProjects)
            .map((project) => <Project key={project.id} {...project} />)
        ) : (
          <p>No projects found for the selected filters.</p>
        )}
      </div>
      {displayProjects < filteredData.length ? (
        <button className={styles.load} onClick={loadMore}>
          <LucideIcon name="Ellipsis" size={32} />
        </button>
      ) : null}
    </div>
  );
};

export default ProjectGallery;
