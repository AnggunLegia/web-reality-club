'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image'

export default function DefaultCarousel({foto1, foto2, foto3}) {
  return (
    <Carousel >
      <img
        alt="..."
        src={foto1} 
      />
      <img
        alt="..."
        src={foto2}
      />
      <img
        alt="..."
        src={foto3}
      />
    
    </Carousel>
  )
}


