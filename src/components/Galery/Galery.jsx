/* src/components/Layout.js */
import React from 'react';
import './Galery.scss';
import ImageGallery from "react-image-gallery";


const Galery = ( props ) => {
  const {
    images
  } = props


  return (
    <ImageGallery items={images} />
  );
};

export default Galery;