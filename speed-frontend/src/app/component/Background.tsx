import React from "react";

const BackgroundImage = (imgSrc: string) => {
    return (
        <div>
            <img src={imgSrc} alt="background" />
        </div>
    );
};

export default BackgroundImage;