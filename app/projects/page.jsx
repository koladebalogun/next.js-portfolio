"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutLoader from "@/components/AboutLoader";
import Navbar from "@/components/Navbar";
import data from "../../utils/projectData.json";
import Images from "@/components/Images";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  console.log(data);

  useLayoutEffect(() => {
    const section = document.querySelectorAll("section");

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
              5
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
              <Images
                image1="/img1.jpg"
                image2="/img2.jpg"
                image3="/img3.jpg"
                image4="/img4.jpg"
                image5="/img5.jpg"
                class="gallery-col col-1"
              />

              <Images
                image1="/img6.jpg"
                image2="/img7.jpg"
                image3="/img5.jpg"
                image4="/img4.jpg"
                image5="/img3.jpg"
                class="gallery-col col-2"
              />

              <Images
                image1="/img2.jpg"
                image2="/img1.jpg"
                image3="/img2.jpg"
                image4="/img3.jpg"
                image5="/img4.jpg"
                class="gallery-col col-3"
              />
            </div>
          </div>
        </section>

        <section className="section-2">
          <div className="side-bar">
            <div className="brand-name">Kolade Balogun</div>
            <div className="des">
              HIGH QUALITY WORKS.{" "}
              <b>
                designed & made <br /> by Kolade Balogun
              </b>
            </div>
          </div>

          <div className="project-container">
            {data.map((item, i) => (
              <div className="project-items-wrapper" key={i}>
                <div className="project-item">
                  <div className="project-item-inner">
                    <a
                      href={item.siteLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img src={item.imageUrl} alt="" />
                      <div className="item-overlay"></div>

                      <div className="item-copy">
                        <div className="item-name">{item.name}</div>
                        <div className="item-hover">
                          Hover or click to visit project
                        </div>
                        <div className="item-id"> {item.id} </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
