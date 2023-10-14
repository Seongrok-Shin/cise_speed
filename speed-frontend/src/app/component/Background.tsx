import React from "react";
import Image from "next/image";
const BackgroundImage = (imgSrc: string) => {
    return (
        <div>
            <Image src={imgSrc} alt="background" width="0"
                height="0"
                sizes="100vw" />
        </div>
    );
};

export default BackgroundImage;