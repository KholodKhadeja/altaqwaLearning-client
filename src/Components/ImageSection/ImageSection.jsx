import React from 'react';
import "./imagesection.scss";
const ImageSection = () => {
    return (
        <div className="container-text">
            <img src="https://github.com/KholodKhadeja/Masjed-altaqwa-learning/blob/main/client-side/src/images/header.png?raw=true"
             className="img-fluid" alt="صورة مسجد التقوى - الطيرة" />

            <p className="centered fs-2 fw-semibold text-nowrap">
البرنامج العلمي الإيماني التربوي 
            </p>
        </div>
    );
}

export default ImageSection;
