'use client'

import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';
import { Card } from 'flowbite-react';


function CardMusik(){
    const [musik, setMusik] = useState([]);
    const musikCollectionRef = collection(db, "musik")

    useEffect(()=>{
        const getMusik= async()=>{
            const data = await getDocs(musikCollectionRef);
            setMusik(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        };
        getMusik()
    },[])
    return(
       
        <div className=' md:grid md:grid-cols-3 md:gap-4 md:m-auto md:w-[1400px] sm:grid sm:grid-cols-2 sm:gap-4 sm:w-[700px] w-[500px] grid  gap-y-2 justify-item-center'>
            {musik.map((musik)=>{
                return(
                    <div>{""}
                        <Card

      className="  hover:bg-slate-300"
      href={musik.Link}
    >
      
     
    <p className=" font-bold tracking-tight text-gray  md:text-2xl sm:text-xl   text-base ">
       {musik.Judul}
      </p>
      <p className="font-normal text-gray-700 ">
       {musik.Menit}
      </p>
    </Card>
    
                    </div>
                )
            })}
        </div>
    )
}
export default CardMusik;