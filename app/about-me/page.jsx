"use client"
import AboutLoader from "@/components/AboutLoader";
import {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es.js";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import style from "../../styles/Aboutme.module.css"
import Link from "next/link";


const page = () => {
  const header1 = useRef(null)
  const header2 = useRef(null)
  const text = useRef(null)
  const text2 = useRef(null)
  const projects = useRef(null)
  const box = useRef(null)


  useEffect(() => {
    anime.timeline().add({
      targets: header1.current,
      translateY:[200,0],
      translateZ:0,
      opacity:[0,1],
      easing: "easeOutExpo",
      duration:2000,
      delay: (el, i) => 2000 + 50 * i
    });

    anime.timeline().add({
      targets: header2.current,
      translateY:[200,0],
      translateZ:0,
      opacity:[0,1],
      easing: "easeOutExpo",
      duration:2000,
      delay: (el, i) => 2200 + 50 * i
    });

    anime.timeline().add({
      targets: text2.current,
      translateY:[200,0],
      translateZ:0,
      opacity:[0,1],
      easing: "easeOutExpo",
      duration:2000,
      delay: (el, i) => 2200 + 50 * i
    });

    anime.timeline().add({
      targets: projects.current,
      translateY:[200,0],
      translateZ:0,
      opacity:[0,1],
      easing: "easeOutExpo",
      duration:2000,
      delay: (el, i) => 2200 + 50 * i
    });

    gsap.to(box.current, 2.4, {
      y:"-100%",
      ease:"Expo.easeInOut",
      delay: 1.8
    })


  },[]);

  return (
    <>
      <AboutLoader />
      <Navbar />
      <div className="container">
        <div className={style.wrapperimg}>
          <div className={style.box} ref={box}></div>
          <img src="/bas.JPG" alt="" className={style.aboutimage} />
        </div>

        <div className={style.header}>
          <div className={style.header1} ref={header1}>Kolade</div>
          <div className={style.header2} ref={header2}>Balogun</div>
        </div>
        <div className={style.herocontainer}>
          <div className={style.sidebartext} ref={text}>
            <p>I am a <span>Frontend</span> developer who sees himself as a bridge between the gap of design and implementation.
            <br/>
            <br />
            I like to think of myself as the <span>JEAN MICHEL BASQUIAT</span> of web development because of my ability to ensure pixel perfect designs and also due to my unique ability of transforming any website into a fully functional, stunning and interactive place where users would always want to revist
            </p>

            
          </div>
          <div className={style.sidebarskills} ref={text2}>
            <h2>skills</h2>
            <h6>html, css, javascript, React.js, next.js, gatsby.js, redux, redux-toolkit, node.js, mongodb, express.js, graphql, firebase, react-native, material-ui, sanity, keystone.js  </h6>
          </div>
          
          <div className={style.projects} ref={projects}>
            <Link href='/projects'>projects</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
