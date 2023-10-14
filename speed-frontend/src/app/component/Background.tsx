import React from "react";
import Image from "next/image";
const BackgroundImage = (imgSrc: string) => {
    return (
        <div>
            <Image src={imgSrc} alt="background" />
        </div>
    );
};

export default BackgroundImage;