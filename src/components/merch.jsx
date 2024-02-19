'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image'
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';




function CardMerch(){
  const [coba, setCoba] = useState([]);
  const cobaCollectionRef = collection(db, "coba");

  useEffect(()=>{
    const getCoba= async()=>{
        const data = await getDocs(cobaCollectionRef);
        setCoba(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    };
    getCoba()
},[])


  return (
    <div className='md:grid md:grid-cols-4 md:gap-x-4 md:justify-item-center md:mr-40
    sm:grid sm:grid-cols-2 sm:gap-4 sm:justify-item-center sm:pl-14 grid  gap-y-4 pl-32 justify-item-center  w-[1400px]'>
            {coba.map((coba)=>{
                return(
                    <div>{""}
                        <div

className='bg-inherit hover:bg-current border-2 flex flex-col justify-between p-6 border-rose-700 rounded-lg h-[390px] w-[250px] '
      href={coba.Link}
    >
      
      <img src={coba.Asset} className='md:w-[200px] sm:w-[300px] w-[400px] pb-5'/>
    <h5 className="text-2xl font-bold tracking-tight line-clamp-3 pb-5  text-white">
       {coba.Judul}
      </h5>
      <p className="font-normal text-white ">
       IDR {coba.Menit}
      </p>
      
      <div className='w-12 text-white border-2 border-rose-700 rounded-md mt-2' 
      >
        buy
        </div>
    
      
    
    </div>
    
                    </div>
                )
            })}
        </div>
    )
}
export default CardMerch;
  


