import React from 'react';
import './Home.scss';
import Galery from '../components/Galery/Galery';

const images = [
  {
    original: "https://e7.pngegg.com/pngimages/564/1018/png-clipart-hello-kitty-hello-kitty-cartoon-hello-kitty-logo-flower-fictional-character.png",
    thumbnail: "https://e7.pngegg.com/pngimages/564/1018/png-clipart-hello-kitty-hello-kitty-cartoon-hello-kitty-logo-flower-fictional-character.png",
  },
  {
    original: "https://e7.pngegg.com/pngimages/698/590/png-clipart-hello-kitty-illustration-hello-kitty-online-drawing-hello-kitty-sticker-flower.png",
    thumbnail: "https://e7.pngegg.com/pngimages/698/590/png-clipart-hello-kitty-illustration-hello-kitty-online-drawing-hello-kitty-sticker-flower.png",
  },
  {
    original: "https://png.pngtree.com/png-clipart/20240810/original/pngtree-a-cartoon-santorini-captivating-png-image_15742244.png",
    thumbnail: "https://png.pngtree.com/png-clipart/20240810/original/pngtree-a-cartoon-santorini-captivating-png-image_15742244.png",
  },
  {
    original: "https://media.istockphoto.com/id/600393644/es/vector/bosquejo-del-contorno-de-santorini-grecia.jpg?s=612x612&w=0&k=20&c=TyV5yIgx-gWBUgL_lXxcyoRkhYCjK-Jkvgg5u8DFI8Y=",
    thumbnail: "https://media.istockphoto.com/id/600393644/es/vector/bosquejo-del-contorno-de-santorini-grecia.jpg?s=612x612&w=0&k=20&c=TyV5yIgx-gWBUgL_lXxcyoRkhYCjK-Jkvgg5u8DFI8Y=",
  },
  {
    original: "https://media.istockphoto.com/id/1620104060/es/vector/isla-de-santorini-grecia-hermosa-arquitectura-blanca-tradicional-e-iglesias-ortodoxas.jpg?s=612x612&w=0&k=20&c=CkRD_-jCpz9VAlv_5EEnPg2Ai67pB89Ff2u1u4ou42I=",
    thumbnail: "https://media.istockphoto.com/id/1620104060/es/vector/isla-de-santorini-grecia-hermosa-arquitectura-blanca-tradicional-e-iglesias-ortodoxas.jpg?s=612x612&w=0&k=20&c=CkRD_-jCpz9VAlv_5EEnPg2Ai67pB89Ff2u1u4ou42I=",
  },
  {
    original: "https://st2.depositphotos.com/4930557/12290/v/950/depositphotos_122907922-stock-illustration-santorini-outline-sketch-greece.jpg",
    thumbnail: "https://st2.depositphotos.com/4930557/12290/v/950/depositphotos_122907922-stock-illustration-santorini-outline-sketch-greece.jpg",
  },
  {
    original: "https://png.pngtree.com/png-vector/20240530/ourlarge/pngtree-santorini-island-greece-flat-png-image_12546676.png",
    thumbnail: "https://png.pngtree.com/png-vector/20240530/ourlarge/pngtree-santorini-island-greece-flat-png-image_12546676.png",
  },
  {
    original: "https://e1.pngegg.com/pngimages/41/46/png-clipart-navidad-laughing-stitch.png",
    thumbnail: "https://e1.pngegg.com/pngimages/41/46/png-clipart-navidad-laughing-stitch.png",
  },
  {
    original: "https://www.ociostock.com/productos/imagenes/img_338849_d7444feaa495baefc37cf0b099b072af_1.jpg",
    thumbnail: "https://www.ociostock.com/productos/imagenes/img_338849_d7444feaa495baefc37cf0b099b072af_1.jpg",
  },
];

const Home = () => {
  return (
    <div className='home'>
      <h1>Propuestas para tus Tote Bags</h1>
      <Galery images={images}/>
    </div>
  );
};

export default Home;