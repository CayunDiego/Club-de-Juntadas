import React from 'react';
import './Designs.scss';
import Galery from '../components/Galery/Galery';

const images = [
  {
    original: "https://i.etsystatic.com/6621713/r/il/cc51c5/2865040167/il_794xN.2865040167_252s.jpg",
    thumbnail: "https://i.etsystatic.com/6621713/r/il/cc51c5/2865040167/il_794xN.2865040167_252s.jpg",
  },
  {
    original: "https://greekcargo.com.au/cdn/shop/files/santorini_canvas_tote_800x.jpg?v=1700448564",
    thumbnail: "https://greekcargo.com.au/cdn/shop/files/santorini_canvas_tote_800x.jpg?v=1700448564",
  },
  {
    original: "https://goodthings.com.au/wp-content/uploads/Grow-With-The-Flow_Tote-Bag.jpg",
    thumbnail: "https://goodthings.com.au/wp-content/uploads/Grow-With-The-Flow_Tote-Bag.jpg",
  },
  {
    original: "https://ih1.redbubble.net/image.1105122842.9950/ssrco,tote,cotton,canvas_creme,lifestyle,tall_portrait,750x1000-bg,f8f8f8.1.jpg",
    thumbnail: "https://ih1.redbubble.net/image.1105122842.9950/ssrco,tote,cotton,canvas_creme,lifestyle,tall_portrait,750x1000-bg,f8f8f8.1.jpg",
  },
  {
    original: "https://ih1.redbubble.net/image.3841026190.0786/ssrco,tote,cotton,canvas_creme,lifestyle,tall_portrait,750x1000-bg,f8f8f8.1.jpg",
    thumbnail: "https://ih1.redbubble.net/image.3841026190.0786/ssrco,tote,cotton,canvas_creme,lifestyle,tall_portrait,750x1000-bg,f8f8f8.1.jpg",
  },
  {
    original: "https://s.catch.com.au/images/product/0237/237391/66b99fda1c52f835857443_w803h620.webp",
    thumbnail: "https://s.catch.com.au/images/product/0237/237391/66b99fda1c52f835857443_w803h620.webp",
  },
  
];


const Designs = () => {
  return (
    <div className='designs'>
      <h1>Diseños de nuestros clientes</h1>
      <Galery images={images}/>
    </div>
  );
};

export default Designs;