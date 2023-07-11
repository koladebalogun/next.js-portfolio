"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutLoader from "@/components/AboutLoader";
import anime from "animejs/lib/anime.es.js";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const section = document.querySelectorAll("section");

    console.log(containerRef.current.offsetWidth);

    anime.timeline().add({
      targets: ".name",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 2000 + 50 * i,
    });

    anime.timeline().add({
      targets: ".name2",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 2200 + 50 * i,
    });

    anime.timeline().add({
      targets: ".scroll",
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 2300 + 50 * i,
    });

    let ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            scrub: 1,
            pin: true,
            start: "top top",
            end: "+=4000",
          },
        })
        .to(containerRef.current, {
          x: () =>
            -(
              containerRef.current.scrollWidth -
              document.documentElement.clientWidth -
              80
            ) + "px",
          ease: "none",
          duration: 1,
        })
        .to(".side-bar", {
          x: 70,
          opacity: 1,
          scrollTrigger: {
            trigger: ".side-bar",
            start: "center+=2500 center",
            scrub: 2.5,
          },
        })
        .to({}, { duration: 1 / section.length });

      gsap.to(".col-1", {
        y: -250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(".col-2", {
        y: 250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(".col-3", {
        y: -250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(".num", {
        x: 600,
        duration: 2,
        scrollTrigger: {
          trigger: ".num",
          start: "right left",
        },
      });

      return () => {
        tl.kill();
      };
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <AboutLoader />
      <Navbar />
      <div className="main-wrapper" ref={containerRef}>
        <section className="section-1">
          <div className="box1">
            <div className="name">kolade</div>
            <div className="name2">
              <span>balogun</span>
            </div>

            <div className="scroll">scroll</div>
          </div>

          <div className="box2">
            <div className="image-gallery">
              <div className="gallery-col col-1">
                <img src="/img1.jpg" alt="" />
                <img src="/img2.jpg" alt="" />
                <img src="/img3.jpg" alt="" />
                <img src="/img4.jpg" alt="" />
                <img src="/img5.jpg" alt="" />
              </div>
              <div className="gallery-col col-2">
                <img src="/img6.jpg" alt="" />
                <img src="/img7.jpg" alt="" />
                <img src="/img5.jpg" alt="" />
                <img src="/img4.jpg" alt="" />
                <img src="/img3.jpg" alt="" />
              </div>
              <div className="gallery-col col-3">
                <img src="/img2.jpg" alt="" />
                <img src="/img1.jpg" alt="" />
                <img src="/img3.jpg" alt="" />
                <img src="/img4.jpg" alt="" />
                <img src="/img5.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="side-bar">
            <div className="brand-name">Angelica Pownall</div>
            <div className="des">
              HIGH QUALITY ART-WORKS.{" "}
              <b>
                designed & made <br /> by Angelica Pownall
              </b>
            </div>
          </div>
          <div className="inner-wrapper">
            {/* <div className="left">
              <div className="line-1">
                <p>Angelina Pownall</p>
                
              </div>
              <div className="image-wrapper">
                <img src='/img6.jpg' alt="" />
              </div>


              <div className="line-2">
                <p className="num">/23</p>
                <p>SPRING</p>
                <button className="loop">
                    <span>COLLECTION / SHOP&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </button>
                <button className="loop loop2">
                    <span>COLLECTION / SHOP&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </button>
              </div>
            </div> */}

            <div className="right">
              <div className="animate-text">
                <span>DALL-E IMAGE GENERATOR</span>
                <p>
                  A fullstack AI image generation app built on Open-AI Dall-E
                  api. It generates images <br />
                  based on a prompt passed in by the user.
                  <br />
                  <br />
                  Built with: React, MongoDb, Node, Tailwind, Open Ai.
                </p>
                <a
                  href="https://image-ai-gen.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  VISIT
                </a>
              </div>

              <div className="img-container">
                <img src="/gen.jpg" alt="" className="project-image" />
              </div>
            </div>

            <div className="right">
              <div className="animate-text">
                <span>MEMORIES</span>
                <p>
                  A fully functional MERN stack social web app that allows users
                  to post pictures, like
                  <br /> and comment on the posts of other users.
                  <br />
                  <br />
                  Built with: React, MongoDb, Redux, Node, Material Ui.
                </p>
                <a
                  href="https://memmries.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  VISIT
                </a>
              </div>

              <div className="img-container">
                <img src="/mem.png" alt="" className="project-image" />
              </div>
            </div>

            <div className="right">
              <div className="animate-text">
                <span>MOVIEZ</span>
                <p>
                  A fully functional movie web app that allows users to get the
                  latest movies, filter by <br /> genre or category, search for
                  any movie and also watchlist movies.
                  <br />
                  <br />
                  Built with: React, Redux Toolkit, Tailwind, Tmdb Api.
                </p>
                <a
                  href="https://mooviezzz.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit
                </a>
              </div>

              <div className="img-container">
                <img src="/moviez.png" alt="" className="project-image" />
              </div>
            </div>

            <div className="right">
              <div className="animate-text">
                <span>CRYPTOWURLD</span>
                <p>
                  A fully functional web app that allows users to get the latest
                  crypto news and stats by
                  <br />
                  It is also allows users connect to their MetaMask wallet and
                  send Ethereum.
                  <br />
                  <br />
                  Built with: React, Context Api, Solidity, Ether.js, Rapid Api.
                </p>
                <a
                  href="https://cryptowurld.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit
                </a>
              </div>

              <div className="img-container">
                <img src="/cryptowurld.png" alt="" className="project-image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
