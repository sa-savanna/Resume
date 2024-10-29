import React, { memo } from 'react';
import { Image } from 'react-bootstrap';


function GetImagesFirebase({ imageName, portfolioImagesUrl }) {


    const updatedUrls = []

    if (portfolioImagesUrl) {
        for (let idx in portfolioImagesUrl) {
            if (portfolioImagesUrl[idx].includes(imageName)) {
                updatedUrls.push(portfolioImagesUrl[idx])
            }
        }
    }

    return (
        <>
            {updatedUrls.map((imageUrl, index) => (
                <Image key={index} variant="top" src={imageUrl} alt={imageName} />
            ))}
        </>
    );
}

export default memo(GetImagesFirebase);
