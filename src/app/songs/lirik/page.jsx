'use client'

import DefaultCard from '@/components/card'
import CardWithDecorativeImage from '@/components/card2'
import CardMusik from '@/components/musik'
import DefaultNavbar from '@/components/navbar'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { db } from '../../../../lib/firebase/page'
import { addDoc, collection, getDoc, doc, updateDoc } from 'firebase/firestore';

 export default function InputSizing() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
  
 
    const [newJudul, setNewJudul]=useState("");
    const [newLink, setNewLink]=useState("");
    const [newMenit, setNewMenit]=useState("");
    const [newLirik, setNewLirik]=useState("");
    const [musik, setMusik] = useState([]);

    useEffect(()=> { let data1 = [];
        const musikCollectionRef = doc (db, "musik", id);
        const getMusik = async() => {
          const data = await getDoc(musikCollectionRef);
          data1.push(data.data());
          setNewJudul(data1[0].Judul)
          setNewLink(data1[0].Link)
          setNewMenit(data1[0].Menit)
          setNewLirik(data1[0].Lirik)
    
    
        };
        getMusik()
    },[]) 
   
    return (
      <>
      <div className='bg-bekgron3 w-screen  '>
        <DefaultNavbar/>
      <div >
        <p className='text-center md:text-9xl text-rose-700 md:pt-36 sm:pt-32 font-bold sm:text-8xl text-9xl pt-32 '>LYRICS</p>  
        </div>
       
   <div className='pt-16  pb-24  flex justify-center'>

   <div

className="  bg-white hover:bg-slate-300 flex flex-col justify-between p-5 rounded-lg items-start h-max w-max"

>


<p className=" font-bold tracking-tight text-gray  md:text-2xl sm:text-xl  line-clamp-2 text-base "
     
    >
     {newJudul}
      </p>
      <p className="font-normal text-gray-700 "
        
      >
      {newMenit}
      </p>
     <pre className="font-normal text-black text-lg " 
       
     >{newLirik}
        </pre>
        
</div>

              </div>
        </div>
        
     
   
      
      </>
    )
}