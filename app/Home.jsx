"use client";
import style from "../styles/Home.module.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={style.home}>
      <div className="menu">
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <Link href="/about-me">
                  <span>I</span> About
                </Link>
                <div className="menu-item-revealer"></div>
              </div>

              <div className="menu-item">
                <Link href="/projects">
                  <span>II</span> Projects
                </Link>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
