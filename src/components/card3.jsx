'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image'
export default function CardWith({foto, judul, desk, w, h, pindah}) {
  return (
   <div>
    <Card
   href={pindah}
   
  className='bg-inherit hover:bg-current border-2  border-rose-700 w-[250px] '
    >
      <Image src={foto} width={w} height={h}/>
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


