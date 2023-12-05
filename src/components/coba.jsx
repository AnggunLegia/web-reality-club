'use client'

import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';
import { Card, Footer, Button } from 'flowbite-react';
import {   BsTrash, BsPen } from 'react-icons/bs';
import { FooterIcon } from 'flowbite-react/lib/esm/components/Footer/FooterIcon';

function CardCoba(){
    const [coba, setCoba] = useState([]);
    const cobaCollectionRef = collection(db, "coba");

 const deleteCoba = async (id) => {
   
        const cobaDoc = doc (db, "coba", id);
        await deleteDoc(cobaDoc);
    };
    
    useEffect(()=>{
        const getCoba= async()=>{
            const data = await getDocs(cobaCollectionRef);
            setCoba(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        };
        getCoba()
    },[])

   
    return(
       
        <div className=' grid grid-cols-3 gap-4 m-auto w-[1400px]'>
            {coba.map((coba)=>{
                return(
                    <div>{""}
                        <Card

      className=" "
      href={coba.Link}
    >
      
     
    <p className=" font-bold tracking-tight text-gray  md:text-2xl sm:text-xl   text-base ">
       {coba.Judul}
      </p>
      <p className="font-normal text-gray-700 ">
       {coba.Menit}
      </p>
     
     <div className='flex space-x-36'>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 border-2 border-bg-black' 
        onClick={() =>{ deleteCoba(coba.id)}}>
                    hapus
        </button>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 '>
        <a href={`/edit_coba?id=${coba.id}`}>edit</a>
        </button>
     </div>
      
    
    </Card>
    
                    </div>
                )
            })}
        </div>
    )
}
export default CardCoba;