"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutLoader from "@/components/AboutLoader";
import anime from "animejs/lib/anime.es.js";
import Navbar from "@/components/Navbar";
import Link from "next/link";

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
                <span>COLLECTION /19* W</span>
              </div>

              <div className="img-container">
                <img src="/img1.jpg" alt="" />
              </div>
            </div>

            <div className="right">
              <div className="animate-text">
                <span>COLLECTION /19* W</span>
              </div>

              <div className="img-container">
                <img src="/img3.jpg" alt="" />
              </div>
            </div>

            <div className="right">
              <div className="animate-text">
                <span>COLLECTION /19* W</span>
              </div>

              <div className="img-container">
                <img src="/img3.jpg" alt="" />
              </div>
            </div>

            <div className="right">
              <div className="animate-text">
                <span>COLLECTION /19* W</span>
              </div>

              <div className="img-container">
                <img src="/img3.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
