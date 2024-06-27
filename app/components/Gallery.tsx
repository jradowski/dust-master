"use Client";

import React from 'react';

type Photo = {
    src: string;
    alt: string;
};

type GalleryProps = {
    photos: Photo[];
};

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
