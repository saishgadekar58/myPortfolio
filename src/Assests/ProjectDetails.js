import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

export default function ProjectDetails({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, eye, ghub } = item;
        return (
          <article key={id} className="item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <div className="btnsDiv">
                <div className="linkSite">
                  <a href={eye} target="_blank" rel="noreferrer">
                    <FaEye className="eye" />
                  </a>
                </div>
                <div className="linkGithub">
                  <a href={ghub} target="_blank " rel="noreferrer">
                    <FaGithub className="ghub" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
