import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

export default function ProjectDetails({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc } = item;
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
                  <a href="www.google.com">
                    <FaEye className="eye" />
                  </a>
                </div>
                <div className="linkGithub">
                  <a href="www.google.com">
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
