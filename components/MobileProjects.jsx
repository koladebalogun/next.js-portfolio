import React from "react";
import style from "../styles/MobileSlider.module.css";
import MobileSlider from "./MobileSlider";
import ImageSlider from "./ImageSlider";
import AboutLoader from "./AboutLoader";
import Navbar from "./Navbar";

const MobileProjects = () => {
  return (
    <>
    <AboutLoader />
    <Navbar />
    <div className={style.wrapper}>
      <div className={style.banner}>
        <div className={style.bannername}>kolade</div>
        <div className={style.bannername2}>
          <span>balogun</span>
        </div>
      </div>
      <ImageSlider
        sliderClass={style.slider1}
        img1="/img1.jpg"
        img2="/img2.jpg"
        img3="/img3.jpg"
        img4="/img4.jpg"
        img5="/img5.jpg"
        img6="/img6.jpg"
      />
      <ImageSlider
        sliderClass={style.slider2}
        img1="/img7.jpg"
        img2="/img6.jpg"
        img3="/img5.jpg"
        img4="/img4.jpg"
        img5="/img3.jpg"
        img6="/img2.jpg"
      />
      <ImageSlider
        sliderClass={style.slider3}
        img1="/img1.jpg"
        img2="/img2.jpg"
        img3="/img3.jpg"
        img4="/img4.jpg"
        img5="/img5.jpg"
        img6="/img6.jpg"
      />
      <MobileSlider />
    </div>
    </>
  );
};

export default MobileProjects;
