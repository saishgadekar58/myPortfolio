import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/saishgadekar58",
    icon: <FaGithub size={28} />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/saish_janai_katsura_da/",
    icon: <FaInstagram size={28} />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/saish-gadekar-9a26541b4/",
    icon: <FaLinkedin size={28} />,
  },
];
