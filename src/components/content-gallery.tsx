"use client";

import React from "react";

import { Content, LucideIcon } from "@/components/ui";
import content from "@/data/content.json";

import styles from "./content-gallery.module.css";

const ContentGallery = () => {
  const [displayContent, setDisplayContent] = React.useState(6);
  const [filterLanguage, setFilterLanguage] = React.useState("all");
  const [filterTag, setFilterTag] = React.useState("all");
  const [data] = React.useState(content);

  const loadMore = () => {
    setDisplayContent(displayContent + 6);
  };

  const handleLanguageChange = (language: string) => {
    setFilterLanguage(language);
    setDisplayContent(6);
  };

  const handleTagChange = (tag: string) => {
    setFilterTag(tag);
    setDisplayContent(6);
  };

  const filteredData = data
    .filter(
      (content) =>
        filterLanguage === "all" || content.language === filterLanguage,
    )
    .filter(
      (content) => filterTag === "all" || content.tags.includes(filterTag),
    );

  return (
    <div className={styles.gallery}>
      <div className={styles.filters}>
        <h2>
          <LucideIcon name="Filter" size={16} />
          Filters:
        </h2>
        <div className={styles.languages}>
          <strong>Languages:</strong>
          <button
            className={
              filterLanguage === "all" ? styles.enabled : styles.disabled
            }
            onClick={() => handleLanguageChange("all")}
          >
            All
          </button>
          <button
            className={
              filterLanguage === "en-US" ? styles.enabled : styles.disabled
            }
            onClick={() => handleLanguageChange("en-US")}
          >
            English
          </button>
          <button
            className={
              filterLanguage === "pt-BR" ? styles.enabled : styles.disabled
            }
            onClick={() => handleLanguageChange("pt-BR")}
          >
            Portuguese
          </button>
          <button
            className={
              filterLanguage === "es-ES" ? styles.enabled : styles.disabled
            }
            onClick={() => handleLanguageChange("es-ES")}
          >
            Spanish
          </button>
        </div>
        <div className={styles.tags}>
          <strong>Tags:</strong>
          <button
            className={filterTag === "all" ? styles.enabled : styles.disabled}
            onClick={() => handleTagChange("all")}
          >
            All
          </button>
          <button
            className={filterTag === "tech" ? styles.enabled : styles.disabled}
            onClick={() => handleTagChange("tech")}
          >
            Tech
          </button>
          <button
            className={
              filterTag === "tutorial" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTagChange("tutorial")}
          >
            Tutorial
          </button>
          <button
            className={
              filterTag === "career" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTagChange("career")}
          >
            Career
          </button>
          <button
            className={
              filterTag === "diversity" ? styles.enabled : styles.disabled
            }
            onClick={() => handleTagChange("diversity")}
          >
            Diversity
          </button>
        </div>
      </div>
      <div className={styles.grid}>
        {filteredData.length > 0 ? (
          filteredData
            .slice(0, displayContent)
            .map((content) => <Content key={content.id} {...content} />)
        ) : (
          <p>No content found for the selected filters.</p>
        )}
      </div>
      {displayContent < filteredData.length ? (
        <button className={styles.load} onClick={loadMore}>
          <LucideIcon name="Ellipsis" size={32} />
        </button>
      ) : null}
    </div>
  );
};

export default ContentGallery;
