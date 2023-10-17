import React from "react";
const BackgroundImage = (imgSrc: string, properties: string) => {
  return (
    <>
      <img src={imgSrc} alt="background" className={properties} />
    </>
  );
};
export default BackgroundImage;
