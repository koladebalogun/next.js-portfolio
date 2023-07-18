import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import style from "../styles/SocialIcons.module.css";

const SocialMediaIcons = () => {
  return (
    <div className="container">
      <div className={style.wrapper}>
        <div className={style.button}>
          <div className={style.icon}>
            <a
              href="https://github.com/koladebalogun?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className={`${style.i} ${style.fab}`} />
            </a>
          </div>
        </div>
        <div className={style.button}>
          <div className={style.icon}>
            <a
              href="https://www.linkedin.com/in/koladebalogun/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className={`${style.i} ${style.fab}`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
