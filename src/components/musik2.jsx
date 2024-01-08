'use client'

import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../lib/firebase/page';
import { Card, Footer, Button } from 'flowbite-react';
import {   BsTrash, BsPen } from 'react-icons/bs';
import { FooterIcon } from 'flowbite-react/lib/esm/components/Footer/FooterIcon';

function CardMusik1(){
    const [musik, setMusik] = useState([]);
    const musikCollectionRef = collection(db, "musik");

 const deleteMusik = async (id) => {
        const musikDoc = doc (db, "musik", id);
        await deleteDoc(musikDoc);
    };
    
    useEffect(()=>{
        const getMusik= async()=>{
            const data = await getDocs(musikCollectionRef);
            setMusik(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        };
        getMusik()
    },[])

   
    return(
       
        <div className=' grid grid-cols-3 gap-4 m-auto w-[1400px]'>
            {musik.map((musik)=>{
                return(
                    <div>{""}
                        <Card

      className=" "
      href={musik.Link}
    >
      
     
    <p className=" font-bold tracking-tight text-gray  md:text-2xl sm:text-xl   text-base ">
       {musik.Judul}
      </p>
      <p className="font-normal text-gray-700 ">
       {musik.Menit}
      </p>
      <pre className="font-normal text-black text-lg w-max " >
     {musik.Lirik}
     </pre>
     <div className='flex space-x-36'>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 border-2 border-bg-black' 
        onClick={()=>{ deleteMusik(musik.id)}} >
                    hapus
        </button>
        <button className='w-32 bg-white rounded-lg hover:bg-slate-300 '>
                    <a  href={`/edit_musik?id=${musik.id}`}>edit</a>
        </button>
     </div>
      
    
    </Card>
    
                    </div>
                )
            })}
        </div>
    )
}
export default CardMusik1;