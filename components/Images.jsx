import React from "react";

const Images = ({...props}) => {
  return (
    <div className={props.class}>
      <img src={props.image1} alt="" />
      <img src={props.image2} alt="" />
      <img src={props.image3} alt="" />
      <img src={props.image4} alt="" />
      <img src={props.image5} alt="" />
    </div>
  );
};

export default Images;
