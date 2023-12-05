'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image'
export default function CardWithDecorativeImage({foto, judul, desk, w, h, pindah}) {
  return (
   <div>
    <Card
   href={pindah}
   
  className='bg-inherit hover:bg-current border-2  border-rose-700 md:w-[400px] sm:w-[300px] w-[400px] '
    >
      <img src={foto} className='md:w-[390px] sm:w-[300px] w-[400px]'/>
      <h5 className="text-2xl font-bold tracking-tight  text-white">
       {
        judul
       }
      </h5>
      <p className="font-normal text-white ">
        {
            desk
        }
      </p>
    </Card>
    </div>
  )
}


